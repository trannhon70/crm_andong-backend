import { Patient } from "src/patient/patient.entity";
import { Users } from "src/users/users.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'chat-patient' })
export class ChatPatient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    //người tạo
    @Column()
    userId: number;
    @ManyToOne(() => Users, (user) => user.id)
    user: Users; 


    //người bệnh
    @Column()
    patientId: number;
    @ManyToOne(() => Patient, (pa) => pa.id)
    patient: Patient;  
 

    @Column()
    created_at: string;
}