import {  IsNotEmpty } from 'class-validator';

export class RoleDto {
    @IsNotEmpty()
    name : string
    menu: string
    created_at: number;
}
