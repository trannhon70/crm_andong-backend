import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, Res } from "@nestjs/common";
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
            message: 'Đăng nhập thành công!',
            token: data.token,
            user: data.user
        });
    }

    @Get('get-by-user')
    async getByIdUser( @Req() req: any, @Res() res: any) {
        try {
            const data = await this.usersService.getByIdUser(req);
            
            return res.status(200).json({
                statusCode: 1,
                message: 'User data retrieved successfully!',
                data: data
            });
        } catch (error) {
            if (error.message === 'Invalid token or user not found') {
                return res.status(404).json({
                    statusCode: 0,
                    message: 'User not found', 
                    error: error.message
                });
            }
    
            // Generic error response
            return res.status(500).json({
                statusCode: 0,
                message: 'Error retrieving user data',
                error: error.message
            });
        }
    }

    @Put('update-user/:id')
    async UpdateUserId(@Param('id') id: number, @Body() body: any, @Res() res: any) {
        try {
            const data = await this.usersService.UpdateUserId(id, body);
            return res.status(200).json({
                statusCode: 1,
                message: 'update user successfully!',
                data: data
            });
        } catch (error) {
            console.log(error);
            
        }
    }

    @Get('get-paging')
     async getpaging( @Req() req: any ,@Query() queryDto: any){
        const data = await this.usersService.getpaging(req ,queryDto);
        return {
            statusCode: 1,
            message: 'get paging user success!',
            data: data,
        };
    }

    @Delete('delete-user/:id')
    async deleteUser(@Param('id') id:number){
        try {
            const data = await this.usersService.deleteUser(id);
            return {
                statusCode: 1,
                message: 'delete user success!',
                data: data,
            }
        } catch (error) {
            
        }
    }

    @Put('active-user/:id')
    async activeUser(@Param('id') id:number){
        try {
            const data = await this.usersService.activeUser(id);
            return {
                statusCode: 1,
                message: 'update user success!',
                data: data,
            }
        } catch (error) {
            
        }
    }

    @Put('un-active-user/:id')
    async unActiveUser(@Param('id') id:number){
        try {
            const data = await this.usersService.unActiveUser(id);
            return {
                statusCode: 1,
                message: 'update user success!',
                data: data,
            }
        } catch (error) {
            
        }
    }

    @Get('get-by-id/:id')
    async fecthByIdUser(@Param('id') id: number){
        try {
            const data = await this.usersService.fecthByIdUser(id);
            return {
                statusCode: 1,
                message: 'update user success!',
                data: data,
            }
        } catch (error) {
            
        }
    }

    @Post('logout')
    async logout(@Req() req: any){
        try {
            const data = await this.usersService.logout(req)
            return {
                statusCode: 1,
                message: 'logout user success!',
                data: data,
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    @Put('reset-password/:id')
    async resetPassword(@Req() req:any, @Param('id') id: number, @Body() body: any){
        try {
            const data = await this.usersService.resetPassword(req, id, body)
            // console.log(data);
            
            return {
                statusCode: 1,
                message: 'reset password success!',
                data: data,
            }
        } catch (error) {
            return {
                error: error.response,
            }
            
        }
    } 

}