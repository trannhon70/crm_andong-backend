import { IsEmail, IsNotEmpty, } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'todos' })
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @IsEmail()
    @Column()
    email: string;

    @IsNotEmpty()
    @Column()
    password: string;
}