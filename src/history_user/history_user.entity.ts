import { IsEmail, IsIn } from "class-validator";
import { Roles } from "src/roles/roles.entity";
import { Users } from "src/users/users.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'history_user' })
export class HistoryUser {
    @PrimaryGeneratedColumn()
    id: number;

    //người sửa 
    @Column({ nullable: true })
    userId: number;

    @ManyToOne(() => Users, (user) => user.id, { nullable: true, onDelete: 'SET NULL' })
    user: Users;

    // Người bị sửa (đối tượng của hành động)
    @Column({ nullable: true })
    targetUserId: number;

    @ManyToOne(() => Users, (user) => user.id, { nullable: true, onDelete: 'SET NULL' })
    targetUser: Users;


    @ManyToOne(() => Roles, (role) => role.users, { eager: true })
    @JoinColumn({ name: 'roleId' })
    role: Roles;

    @Column({ name: 'roleId', nullable: true })
    roleId: number;

    @Column({ type: 'text' })
    hospitalId: string;

    @IsEmail()
    @Column({ nullable: true })
    email: string;

    @Column({ nullable: true }) // Không bắt buộc
    fullName: string;


    @Column({ nullable: true }) // Không bắt buộc
    @IsIn(['vi', 'en', 'tq'])
    language: string;

    @Column({ type: 'boolean', nullable: true })
    isshow: boolean;

    @Column({ type: 'boolean', nullable: true })
    online: boolean;

    @Column({ type: 'varchar', length: 255, nullable: true })
    code: string;

    //thao tác
    @Column({ nullable: true })
    @IsIn(['THÊM', 'XÓA', 'CẬP NHẬT'])
    action: string

    @Column()
    created_at: number;

}
