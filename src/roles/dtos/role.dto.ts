import {  IsNotEmpty } from 'class-validator';

export class RoleDto {
    @IsNotEmpty()
    name : string

    created_at: number;
}
