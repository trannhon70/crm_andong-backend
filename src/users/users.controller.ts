import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UsersService } from "./users.service";


@Controller('user/create')
export class UserController {
    constructor (
        private readonly usersService: UsersService
    ){}

    @Post()
    create(@Body() body: CreateUserDto){
        return this.usersService.create(body);
    }

    // @Get()
    // findAll(
    //     @Query('page') page: string = '1',
    //     @Query('limit') limit: string = '2',
    //     @Query('email') email?: string  
    // ) {
    //     return this.usersService.findAll(Number(page), Number(limit), email);
    // }
}