import { Departments } from "src/department/department.entity";
import { Hospitals } from "src/hospital/hospital.entity";
import { Users } from "src/users/users.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'diseases' })
export class Diseases {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    userId: number;

    @Column()
    hospitalId: number; 

    @Column()
    departmentId: number

    @Column()
    isshow: boolean
    
    @Column()
    created_at: number;

    @ManyToOne(() => Hospitals, (hospital) => hospital.id)
    hospital: Hospitals;

    @ManyToOne(() => Users, (user) => user.id)
    user: Users;

    @ManyToOne(() => Departments, (de) => de.id)
    department: Departments;
}
  