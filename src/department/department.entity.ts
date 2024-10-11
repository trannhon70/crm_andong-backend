import { Hospitals } from "src/hospital/hospital.entity";
import { Users } from "src/users/users.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'departments' })
export class Departments {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    userId: number;
    @ManyToOne(() => Users, (user) => user.id)
    user: Users;

    @Column()
    hospitalId: number; 
    @ManyToOne(() => Hospitals, (hospital) => hospital.id)
    hospital: Hospitals;
    
    @Column()
    created_at: number;

   
}
  