import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'departments' })
export class Departments {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    userId: number;

    @Column()
    hospitalId: number; 
    
    @Column()
    created_at: number;

   
}
  