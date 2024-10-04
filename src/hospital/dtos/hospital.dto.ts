import {  IsNotEmpty, IsString } from 'class-validator';

export class HospitalDto {
    @IsNotEmpty()
    name : string

    @IsString()
    phone: string
    author: string
    created_at: number;
}