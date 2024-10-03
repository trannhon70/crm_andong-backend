import { Body, Controller, Get, Post, Query, Res } from "@nestjs/common";
import { RoleDto } from "./dtos/role.dto";
import { RolesService } from "./roles.service";


@Controller('role')
export class RoleController {
    constructor (
        private readonly rolesService: RolesService
    ){}

    @Post('create')
     async create(@Body() dto: any){
        
        const data = await this.rolesService.create(dto);
        return {
            statusCode: 1,
            message: 'Tạo vai trò thành công!',
            data: data,
        };
    }
    
   
}