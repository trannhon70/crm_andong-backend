import { Patient } from "src/patient/patient.entity";
import { Users } from "src/users/users.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'notification' })
export class Notification {
    @PrimaryGeneratedColumn()
    id: number;

    //0 là chưa xem, 1 là đã xem
    @Column()
    status: number

    @Column()
    patientId:number

    @ManyToOne(() => Patient, (pa) => pa.id)
    patient: Patient;

    @Column()
    userId: number;
    @ManyToOne(() => Users, (user) => user.id)
    user: Users;

    @Column()
    hospitalId: number;
   

    @Column()
    created_at: number;
}