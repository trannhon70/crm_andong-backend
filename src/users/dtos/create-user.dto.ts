import { IsBoolean, IsEmail, IsIn, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    roleId : number
    
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

    @IsOptional() // Nếu online không cần thiết trong request
    @IsBoolean()  // Kiểm tra kiểu dữ liệu boolean
    online?: boolean; // Dấu hỏi chỉ ra rằng đây là tùy chọn

    created_at: number;
}
