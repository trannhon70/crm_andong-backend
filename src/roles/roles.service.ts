

import { InjectRepository } from "@nestjs/typeorm";

import { Repository } from "typeorm";
import { Roles } from "./roles.entity";
import { RoleDto } from "./dtos/role.dto";
import { currentTimestamp } from "utils/currentTimestamp";


export class RolesService {
    constructor(
        @InjectRepository(Roles) 
        private readonly roleRepository: Repository<Roles>,
    ){}

    async create(dto: RoleDto){
        const data : RoleDto = {
            name: dto.name,
            created_at: currentTimestamp
        }
        const todo = this.roleRepository.create(data);
        return await this.roleRepository.save(todo)
    }

    
}