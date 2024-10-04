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

    @Column({ name: 'roleId' })
    roleId: number;

    @ManyToOne(() => Hospitals, (hospital) => hospital.users, { eager: true })
    @JoinColumn({ name: 'hospitalId' })
    hospital: Hospitals;

    @Column({ name: 'hospitalId' })
    hospitalId: number;

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
