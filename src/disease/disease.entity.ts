import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

   
}
  