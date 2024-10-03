

import { InjectRepository } from "@nestjs/typeorm";

import { Repository } from "typeorm";
import { Roles } from "./roles.entity";
import { RoleDto } from "./dtos/role.dto";
import { currentTimestamp } from "utils/currentTimestamp";
import { BadRequestException } from "@nestjs/common";


export class RolesService {
    constructor(
        @InjectRepository(Roles) 
        private readonly roleRepository: Repository<Roles>,
    ){}

    async create(dto: RoleDto){
        const check = await this.roleRepository.findOne({ where: { name: dto.name } });
        if (check) {
            throw new BadRequestException('Tên quyền đã được đăng ký, vui lòng đăng ký tên khác!');
        }
        const data : RoleDto = {
            name: dto.name,
            menu: dto.menu,
            created_at: currentTimestamp
        }
        const todo = this.roleRepository.create(data);
        return await this.roleRepository.save(todo)
    }

    
}