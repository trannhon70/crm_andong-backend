import { IsBoolean, IsEmail, IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    roleId : number

    @IsNotEmpty()
    hospitalId : string
    
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
    //mã chuyên gia
    @IsOptional()  // Không bắt buộc phải có code
    @IsString()
    code: string;
}
