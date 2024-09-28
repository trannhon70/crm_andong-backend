import { IsEmail, IsIn, IsNotEmpty } from "class-validator";
import { Roles } from "src/roles/roles.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Roles, (role) => role.users, { eager: true })
    @JoinColumn({ name: 'roleId' }) // Đảm bảo ánh xạ với cột roleId
    role: Roles;

    @Column({ name: 'roleId' }) // Đặt tên cột là roleId
    roleId: number; // Khóa ngoại để lưu ID của vai trò

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

    @Column()
    created_at: number;
}
