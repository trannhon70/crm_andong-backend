import { Users } from "src/users/users.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity({ name: 'hospitals' })  // Đảm bảo tên bảng nhất quán
export class Hospitals {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    phone: string;
    
    @Column()
    author: string

    @Column()  // Nếu bạn đang lưu trữ timestamps
    created_at: number;

    // @OneToMany(() => Users, (user) => user.hospital)  // Một bệnh viện có nhiều người dùng
    // users: Users[];
}

