

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
            created_at: currentTimestamp()
        }
        const todo = this.roleRepository.create(data);
        return await this.roleRepository.save(todo)
    }

    async getpaging(query: any) {
    const pageIndex = query.pageIndex ? parseInt(query.pageIndex, 10) : 1;
    const pageSize = query.pageSize ? parseInt(query.pageSize, 10) : 10;
    const search = query.search ? query.search.trim() : '';

    const skip = (pageIndex - 1) * pageSize;

    const qb = this.roleRepository.createQueryBuilder('role')
        .leftJoinAndSelect('role.users', 'user', 'user.isshow = :isshow', { isshow: true })
        .select(['role.id', 'role.name', 'role.created_at', 'user.id', 'user.fullName']) // chọn field cần thiết
        .skip(skip)
        .take(pageSize)
        .orderBy('role.created_at', 'ASC');

    if (search) {
        qb.where('role.name LIKE :search', { search: `%${search}%` });
    }

    const [result, total] = await qb.getManyAndCount();

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

    async updateRole (id: number, body:any) {
        const role = await this.roleRepository.findOne({
            where:{id}
        });

        if (!role) {
            throw new Error('Role not found');
        }

        Object.assign(role, body);
        return await this.roleRepository.save(role);
    }

    async getAll () {
        try {
            const reuslt  = await this.roleRepository.find()
            return reuslt
        } catch (error) {
            console.log(error);
            
        }
    }
}