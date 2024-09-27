import { IsEmail, IsIn, IsNotEmpty, } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'roles' })
export class Roles {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    // @IsNotEmpty()
    @Column()
    created_at: number;


}