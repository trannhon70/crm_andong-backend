import { Users } from "src/users/users.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'roles' })
export class Roles {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: 'text' })  
    menu: string

    @Column()
    created_at: number;

    @OneToMany(() => Users, (user) => user.role)  // Đảm bảo rằng bạn tham chiếu đến trường 'role'
    users: Users[];
}
