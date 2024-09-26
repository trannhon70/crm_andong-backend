import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "./users.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dtos/create-user.dto";
import * as bcrypt from 'bcrypt';
import { currentTimestamp } from "utils/currentTimestamp";
import { BadRequestException } from "@nestjs/common";

let saltOrRounds = 10;

export class UsersService {
    constructor(
        @InjectRepository(Users) 
        private readonly userRepository: Repository<Users>,
    ){}

    async create(body: CreateUserDto){
        const check = await this.userRepository.findOne({ where: { email: body.email }});
        if(check){
            throw new BadRequestException('Email đã được đăng ký, vui lòng đăng ký mail khác!');
        }
       
        const hashPassword = await bcrypt.hash(body.password , saltOrRounds)
        
        const data : any = {
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

}