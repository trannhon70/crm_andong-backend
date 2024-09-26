
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateTodoDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}