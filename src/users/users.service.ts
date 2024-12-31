import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "./users.entity";
import { Like, Not, Repository } from "typeorm";
import { CreateUserDto } from "./dtos/create-user.dto";
import * as bcrypt from 'bcrypt';
import { currentTimestamp } from "utils/currentTimestamp";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { LoginUserDto } from "./dtos/login-user.dto";
import { JwtService } from "@nestjs/jwt";
import { Roles } from "src/roles/roles.entity";
import { Hospitals } from "src/hospital/hospital.entity";
import { HistoryLogin } from "src/historyLogin/historyLogin.entity";
import { RedisService } from "src/redis/redis.service";
import { expirationTime } from "utils";

let saltOrRounds = 10;

export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly userRepository: Repository<Users>,
        @InjectRepository(Roles)
        private readonly roleRepository: Repository<Roles>,
        @InjectRepository(Hospitals)
        private readonly hospitalsRepository: Repository<Hospitals>,
        @InjectRepository(HistoryLogin)
        private readonly historyLoginRepository: Repository<HistoryLogin>,
        private readonly jwtService: JwtService ,// Inject JwtService,
        private readonly redisService: RedisService,
    ) { }

    private async saveHistoryLogin(
        email: string | null,
        password: string | null,
        action: string,
        ip: string,
        
        fullName?: string,
        error?: string,
    ) {
        const dataHistory = {
            email,
            password,
            action,
            ip,
            fullName,
            error,
            created_at: currentTimestamp(),
        };
        const history = this.historyLoginRepository.create(dataHistory);
        await this.historyLoginRepository.save(history);
    }

    async create(body: CreateUserDto) {
        const roleExists = await this.roleRepository.findOne({ where: { id: body.roleId } });
        const check = await this.userRepository.findOne({ where: { email: body.email } });
        if (check) {
            throw new BadRequestException('Email đã được đăng ký, vui lòng đăng ký mail khác!');
        }

        const hashPassword = await bcrypt.hash(body.password, saltOrRounds)

        const data: any = {
            role: roleExists || '',
            email: body.email || '',
            password: hashPassword || '',
            fullName: body.fullName || '',
            avatar: body.avatar ? body.avatar : '',
            language: body.language || '',
            isshow: body.isshow || false ,
            online: body.online || false,
            hospitalId: body.hospitalId || '',
            code: body.code || '',
            created_at: currentTimestamp(),
        }

        const todo = this.userRepository.create(data);
        return await this.userRepository.save(todo)
    }

    async login(body: LoginUserDto, ip: string) {
    const user = await this.userRepository.findOne({
        where: { email: body.email },
        relations: ['role'], // Liên kết với bảng Roles
    });

    if (!user) {
        await this.saveHistoryLogin(body.email, body.password, 'ERROR', ip, '', 'Email không tồn tại!');
        throw new BadRequestException('Email không tồn tại!');
    }

    if (user.isshow === false) {
        await this.saveHistoryLogin(body.email, body.password, 'ERROR', ip, '', 'Tài khoản của bạn đã bị khóa, vui lòng liên hệ quản trị viên để được sử dụng tiếp!');
        throw new BadRequestException('Tài khoản của bạn đã bị khóa, vui lòng liên hệ quản trị viên để được sử dụng tiếp!');
    }

    const isMatch = await bcrypt.compare(body.password, user.password);
    if (!isMatch) {
        await this.saveHistoryLogin(body.email, body.password, 'ERROR', ip, '', 'Password không đúng');
        throw new BadRequestException('Password không đúng');
    }

    // Kiểm tra Redis xem có phiên đăng nhập nào chưa
    const currentSession = await this.redisService.getKey(`user:${user.id}:session`);

    if (currentSession) {
        // Hủy token cũ
        await this.redisService.delKey(`user:${user.id}:session`);
    }

    // Tạo payload cho token mới
    const payload = {
        email: user.email,
        id: user.id,
        fullName: user.fullName,
        language: user.language,
        isshow: user.isshow,
        online: user.online,
        role: user.role, // Thông tin vai trò được lấy từ bảng Roles
    };

    const sessionToken = this.jwtService.sign(payload);

    // Lưu token mới vào Redis với thời gian hết hạn
    
    const sessionData = {
        token: sessionToken,
        expiresAt: Date.now() + expirationTime,
    };
    await this.redisService.setKey(`user:${user.id}:session`, JSON.stringify(sessionData), expirationTime / 1000);

    // Cập nhật trạng thái online thành true
    user.online = true;
    await this.userRepository.save(user);

    await this.saveHistoryLogin('', '', 'SUCCESS', ip, user.fullName, '');

    return {
        token: sessionToken,
        user: {
            ...user,
            role: user.role, // Đảm bảo rằng vai trò cũng được trả về trong response
        },
    };
}


    async getByIdUser(req: any) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            throw new Error('Authorization token is missing');
        }
        try {
            const decoded = await this.jwtService.verify(token); // Assuming you use JWT
            const userId = decoded.id; // Decoded token should contain user ID
            // Fetch user data based on the userId
            const user = await this.userRepository.findOne(
                { 
                    where: { id: userId }, 
                    select: ['id', 'email',  'fullName', 'avatar', 'language', 'isshow', 'online', "role", 'created_at', 'hospitalId'] 
                },
            );
            if (!user) {
                throw new Error('User not found');
            }
            return user;
        } catch (error) {
            throw new Error('Invalid token or user not found');
        }
    }

    async UpdateUserId(id: number, body: any): Promise<any> {
        const roleExists = await this.roleRepository.findOne({ where: { id: body.roleId } });
    
        const user = await this.userRepository.findOne({
            where: { id },
            relations: ['role'], // Make sure you're loading relations, if required
        });
        
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
    
        if (body.password) {
            const hashPassword = await bcrypt.hash(body.password, saltOrRounds);
            const data: any = {
                email: body.email,
                password: hashPassword,
                fullName: body.fullName,
                language: body.language,
                isshow: body.isshow,
                hospitalId: body.hospitalId,
                code: body.code,
                role: roleExists, // Assign the whole role entity, not just the ID
            };
    
            Object.assign(user, data);
            return await this.userRepository.save(user);
    
        } else {
            const data: any = {
                email: body.email,
                fullName: body.fullName,
                language: body.language,
                isshow: body.isshow,
                hospitalId: body.hospitalId,
                code: body.code,
                role: roleExists, // Assign the whole role entity
            };
    
            Object.assign(user, data);
            return await this.userRepository.save(user);
        }
    }

    async getpaging(req: any ,query: any ) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            throw new Error('Authorization token is missing');
        }
        const decoded = await this.jwtService.verify(token); // Assuming you use JWT
        const userId = decoded.id;
        
        const pageIndex = query.pageIndex ? parseInt(query.pageIndex, 10) : 1; 
        const pageSize = query.pageSize ? parseInt(query.pageSize, 10) : 10;  
        const search = query.search ? query.search.trim() : '';
        const isshow = query.isshow 
        const language = query.language ? query.language.trim() : '';

        const skip = (pageIndex - 1) * pageSize; 
        const where: any = {
            // id: Not(userId),
            ...(search && { fullName: Like(`%${search}%`) }), 
            ...(language && { language }),  
            ...(query.isshow  && { isshow }),  
        };

        const [result, total] = await this.userRepository.findAndCount({
            select: ['id', 'email',  'fullName', 'avatar', 'language', 'isshow', 'online', "role", 'created_at'],
            where,
            skip: skip,
            take: pageSize,
            order: {
                created_at: 'DESC', 
            },
            relations: ['role'],
        });

        return {
            data: result,
            total: total,
            pageIndex: pageIndex,
            pageSize: pageSize,
            totalPages: Math.ceil(total / pageSize),
        };
    }

    async deleteUser (id: number){
        if(id){
            return this.userRepository.delete(id)
        }
    }

    async activeUser (id: number){
        if(id){
            const user = await this.userRepository.findOne({
                where: { id },
            });
            if (user) {
                user.isshow = true;
                return this.userRepository.save(user);
            } 
        }
    }

    async unActiveUser (id: number) {
        
        if(id){
            const user = await this.userRepository.findOne({
                where: { id },
            });
            if (user) {
                user.isshow = false;
                return this.userRepository.save(user);
            } 
        }
    }

    async fecthByIdUser( id: number){
        if(id){
            return this.userRepository.findOne({
                select: ['id', 'email',  'fullName', 'avatar', 'language', 'isshow', 'online', "role", 'created_at', 'hospitalId'],
                where: { id },
            });
        }
    }

    async logout(req: any) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            throw new Error('Authorization token is missing');
        }
        try {
            const decoded = await this.jwtService.verify(token); // Assuming you use JWT
            const id = decoded.id;
            const user = await this.userRepository.findOne({
                where: { id },
            });
            if (user) {
                user.online = false;
                return this.userRepository.save(user);
            } 
            
        } catch (error) {
            console.log(error);
            
        }
    }

    async resetPassword(req : any, id : number, body : any){
        if(id){
            const user = await this.userRepository.findOne({
                where: { id },
            });
            
            const isMatch = await bcrypt.compare(body.password, user.password);

            if (!isMatch) {
                throw new BadRequestException('Mật khẩu gốc không đúng');
            }
            
            const hashPassword = await bcrypt.hash(body.passwordnew, saltOrRounds)
           
            
            user.password = hashPassword;
            return this.userRepository.save(user);

        }
    }

    async getAllUserOnline(req:any) {
        const reuslt =  await this.userRepository.find({
            where : {online: true}
        })
        return reuslt.length
    }
}