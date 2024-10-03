import { Body, Controller, Delete, Get, Param, Post, Query, Res } from "@nestjs/common";
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

    @Get('get-paging')
     async getpaging(@Query() queryDto: any){
        const data = await this.rolesService.getpaging(queryDto);
        return {
            statusCode: 1,
            message: 'get paging role success',
            data: data,
        };
    }

    @Get('get-by-id/:id')
     async getById(@Param('id') id: number){
        const data = await this.rolesService.getById(id);
        return {
            statusCode: 1,
            message: 'get role by id success!',
            data: data,
        };
    }

    @Delete('delete/:id')
    async deleteRoleId(@Param('id') id: number){
        try {
            const data = await this.rolesService.deleteRoleId(id);
            return {
                statusCode: 1,
                message: 'delete role success!',
                data: data
            }
        } catch (error) {
            console.log(error);
            
        }
    }
    
   
}