import { IsEmail, IsIn, IsNotEmpty } from "class-validator";
import { Hospitals } from "src/hospital/hospital.entity";
import { Roles } from "src/roles/roles.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })  // Đảm bảo tên bảng nhất quán
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Roles, (role) => role.users, { eager: true })
    @JoinColumn({ name: 'roleId' })
    role: Roles;

    @Column({ name: 'roleId', nullable: true })
    roleId: number;
    
    @Column({ type: 'text' })  
    hospitalId: string;

    @IsEmail()
    @Column()
    email: string;

    @IsNotEmpty()
    @Column()
    password: string;

    @IsNotEmpty()
    @Column({ nullable: true }) // Không bắt buộc
    fullName: string;

    @Column({ nullable: true }) // Không bắt buộc
    avatar: string;

    @IsNotEmpty()
    @Column({ nullable: true }) // Không bắt buộc
    @IsIn(['vi', 'en', 'tq'])
    language: string;

    @IsNotEmpty()
    @Column({ type: 'boolean', nullable: true })
    isshow: boolean;

    @Column({ type: 'boolean', nullable: true })
    online: boolean;

    @Column()  
    created_at: number;

    @Column()  
    code: string;
}
