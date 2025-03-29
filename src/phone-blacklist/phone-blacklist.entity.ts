import { Users } from "src/users/users.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'phone_black_list' })
export class PhoneBlacklist {
    @PrimaryGeneratedColumn()
    id: number;

    //người tạo
    @Column({ nullable: true })
    userId: number;
    @ManyToOne(() => Users, (user) => user.id)
    user: Users;

    @Column()
    phone: string;

    //ngày tạo
    @Column({ nullable: true })
    created_at: number;
}
