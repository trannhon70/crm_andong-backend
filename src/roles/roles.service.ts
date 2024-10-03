

import { InjectRepository } from "@nestjs/typeorm";

import { Like, Repository } from "typeorm";
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

    async getpaging(query: any) {
        const pageIndex = query.pageIndex ? parseInt(query.pageIndex, 10) : 1; 
        const pageSize = query.pageSize ? parseInt(query.pageSize, 10) : 10;  
        const search = query.search ? query.search.trim() : '';

        const skip = (pageIndex - 1) * pageSize; 

        const [result, total] = await this.roleRepository.findAndCount({
            select: ['id', 'name', 'created_at'],
            where: search
            ? { name: Like(`%${search}%`) } 
            : {},
            skip: skip,
            take: pageSize,
            order: {
                created_at: 'ASC', 
            },
            relations: ['users'],
        });

        return {
            data: result,
            total: total,
            pageIndex: pageIndex,
            pageSize: pageSize,
            totalPages: Math.ceil(total / pageSize),
        };
    }
    
    async deleteRoleId (id: number) {
        if(id){
            return this.roleRepository.delete(id)
        }
    }

    async getById (id: number) {
        if(id){
            const result = await this.roleRepository.findOne({
                where: {id}
            })
            return result
        }
    }
}