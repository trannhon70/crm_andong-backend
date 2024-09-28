import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "./users.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dtos/create-user.dto";
import * as bcrypt from 'bcrypt';
import { currentTimestamp } from "utils/currentTimestamp";
import { BadRequestException } from "@nestjs/common";
import { LoginUserDto } from "./dtos/login-user.dto";
import { JwtService } from "@nestjs/jwt";
import { Roles } from "src/roles/roles.entity";

let saltOrRounds = 10;

export class UsersService {
    constructor(
        @InjectRepository(Users) 
        private readonly userRepository: Repository<Users>,
        @InjectRepository(Roles) 
        private readonly roleRepository: Repository<Roles>,
        private readonly jwtService: JwtService // Inject JwtService
    ){}

    async create(body: CreateUserDto){
        const roleExists = await this.roleRepository.findOne({ where: { id: body.roleId } });
        const check = await this.userRepository.findOne({ where: { email: body.email }});
        if(check){
            throw new BadRequestException('Email đã được đăng ký, vui lòng đăng ký mail khác!');
        }
       
        const hashPassword = await bcrypt.hash(body.password , saltOrRounds)
        
        const data : any = {
            role: roleExists,
            email: body.email,
            password: hashPassword,
            fullName: body.fullName,
            avatar: body.avatar,
            language: body.language,
            isshow: body.isshow,
            online: body.online,
            created_at: currentTimestamp,
        }
        
        const todo = this.userRepository.create(data);
        return await this.userRepository.save(todo)
    }

    async login(body: LoginUserDto) {
        const user = await this.userRepository.findOne({
            where: {
                email: body.email
            },
            relations: ['role'], // Liên kết với bảng Roles
        });
    
        if (!user) {
            throw new BadRequestException('Email không tồn tại!');
        }
    
        const isMatch = await bcrypt.compare(body.password, user.password);
    
        if (!isMatch) {
            throw new BadRequestException('Password không đúng');
        }
    
        const payload = {
            email: user.email,
            id: user.id,
            fullName: user.fullName,
            language: user.language,
            isshow: user.isshow,
            online: user.online,
            role: user.role, // Thông tin vai trò được lấy từ bảng Roles
        };
    
        const token = this.jwtService.sign(payload);
        return {
            token: token,
            user: {
                ...user,
                role: user.role, // Đảm bảo rằng vai trò cũng được trả về trong response
            }
        }
    }
    

}