import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "./users.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dtos/create-user.dto";


export class UsersService {
    constructor(
        @InjectRepository(Users) 
        private readonly todoRepository: Repository<Users>,
    ){}

    async create(body: CreateUserDto){
        
        
        const todo = this.todoRepository.create(body);
        return await this.todoRepository.save(todo)
    }

}