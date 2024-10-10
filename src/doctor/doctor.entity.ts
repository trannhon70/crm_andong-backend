
import { Hospitals } from "src/hospital/hospital.entity";
import { Users } from "src/users/users.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'doctor' })
export class Doctor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    //người tạo
    @Column()
    userId: number;

    @ManyToOne(() => Users, (user) => user.id)
    user: Users;

    //bệnh viện
    @Column()
    hospitalId: number; 

    @ManyToOne(() => Hospitals, (hospital) => hospital.id)
    hospital: Hospitals;

    //phòng bác sĩ
    @Column()
    doctor_office:string
    
    @Column()
    created_at: number;

    
}