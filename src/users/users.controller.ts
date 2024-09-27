import { Body, Controller, Post, Res } from "@nestjs/common";
import { Response } from 'express';
import { CreateUserDto } from "./dtos/create-user.dto";
import { LoginUserDto } from "./dtos/login-user.dto";
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

    @Post('login')
    async login(@Body() body: LoginUserDto, @Res() res: Response) {
        const data = await this.usersService.login(body);
        // console.log("Dữ liệu đăng nhập:", data); // Ghi log phản hồi
        return res.json({
            statusCode: 1,
            message: 'Login thành công!',
            token: data.token,
            user: data.user
        });
    }


}