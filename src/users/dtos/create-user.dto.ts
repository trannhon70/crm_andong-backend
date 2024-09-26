import { IsEmail, IsIn, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    fullName: string;

    avatar: string;

    @IsNotEmpty()
    @IsIn(['vi', 'en', 'tq'])
    language: string;

    @IsNotEmpty()
    isshow: boolean;

    online: boolean;

    // @IsNotEmpty()
    created_at: number;
}