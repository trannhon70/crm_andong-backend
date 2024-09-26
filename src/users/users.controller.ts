import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UsersService } from "./users.service";


@Controller('user')
export class UserController {
    constructor (
        private readonly usersService: UsersService
    ){}

    @Post('create')
    async create(@Body() body: CreateUserDto){
        const user = await this.usersService.create(body);
        return {
            statusCode: 1,
            message: 'create success!',
            data: user
        };
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