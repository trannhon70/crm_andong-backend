import { IsEmail, IsIn, IsNotEmpty, } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    role: string;

    @IsEmail()
    @Column()
    email: string;

    @IsNotEmpty()
    @Column()
    password: string;

    @IsNotEmpty()
    @Column()
    fullName: string;

    @Column()
    avatar: string;

    @IsNotEmpty()
    @Column()
    @IsIn(['vi', 'en', 'tq'])
    language: string;

    @IsNotEmpty()
    @Column({ type: 'boolean' })
    isshow: boolean;

    @Column({ type: 'boolean' })
    online: boolean;

    // @IsNotEmpty()
    @Column()
    created_at: number;


}