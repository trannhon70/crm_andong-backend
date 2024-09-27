import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "./users.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dtos/create-user.dto";
import * as bcrypt from 'bcrypt';
import { currentTimestamp } from "utils/currentTimestamp";
import { BadRequestException } from "@nestjs/common";
import { LoginUserDto } from "./dtos/login-user.dto";
import { JwtService } from "@nestjs/jwt";

let saltOrRounds = 10;

export class UsersService {
    constructor(
        @InjectRepository(Users) 
        private readonly userRepository: Repository<Users>,
        private readonly jwtService: JwtService // Inject JwtService
    ){}

    async create(body: CreateUserDto){
        const check = await this.userRepository.findOne({ where: { email: body.email }});
        if(check){
            throw new BadRequestException('Email đã được đăng ký, vui lòng đăng ký mail khác!');
        }
       
        const hashPassword = await bcrypt.hash(body.password , saltOrRounds)
        
        const data : any = {
            role: body.role_id,
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

    async login (body: LoginUserDto) {
        const user = await this.userRepository.findOne({
            where: {
                email: body.email
            },
            
        })

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
            role: user.role_id,
        };
       
        const token = this.jwtService.sign(payload);
        return {
            token: token,
            user: user
        }
        
    }

}