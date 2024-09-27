import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { RoleDto } from "./dtos/role.dto";
import { RolesService } from "./roles.service";


@Controller('role')
export class RoleController {
    constructor (
        private readonly rolesService: RolesService
    ){}

    @Post('create')
    create(@Body() dto: RoleDto){
        return this.rolesService.create(dto);
    }
    
   
}