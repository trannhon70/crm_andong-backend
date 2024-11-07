import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'history-login' })
export class HistoryLogin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    action: string

    @Column()
    ip: string

    @Column()
    fullName: string

    @Column()
    error: string

    @Column()
    created_at: number;
}