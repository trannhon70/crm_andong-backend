import { Body, Controller, Get, Post, Query, Res } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UsersService } from "./users.service";
import { LoginUserDto } from "./dtos/login-user.dto";
import { Response } from 'express';


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

    @Post('login')
    async login(@Body() body: LoginUserDto, @Res() res: Response) {
        const data = await this.usersService.login(body); // Không cần res ở đây
        return res.json({ // Gửi token trong phản hồi
            statusCode: 1,
            message: 'Login thành công!',
            token: data.token, // Bao gồm token trong phản hồi
            user: data.user // Có thể bao gồm thêm dữ liệu người dùng
        });
    }


}