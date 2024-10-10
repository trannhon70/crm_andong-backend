import { IsIn } from "class-validator";
import { Departments } from "src/department/department.entity";
import { Diseases } from "src/disease/disease.entity";
import { Hospitals } from "src/hospital/hospital.entity";
import { Media } from "src/media/media.entity";
import { Users } from "src/users/users.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'patient' })
export class Patient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column()
    @IsIn(['nam', 'nữ', 'không xác định'])
    male: string

    //tuổi
    @Column()
    yearOld: number;

    @Column()
    phone: number;

    //nội dung tư ván
    @Column()
    content: string;

    //bệnh
    @Column()
    diseasesId: number;

    @ManyToOne(() => Diseases, (diseases) => diseases.id)
    diseases: Diseases;

    //khoa
    @Column()
    departmentId: number

    @ManyToOne(() => Departments, (de) => de.id)
    department: Departments;

    // nguồn đến
    @Column()
    mediaId: number

    @ManyToOne(() => Media, (me) => me.id)
    media: Media;

    //thành phố
    @Column()
    city:string

    //số chuyên gia
    @Column()
    expertNo: string

    //thời gian hen
    @Column()
    appointmentTime: number

    //thời gian nhắt hẹn
    @Column()
    reminderTime: number

    //ghi chú
    @Column()
    note: string

    //sua doi thời gian đăng ký
    @Column()
    editregistrationTime: number

    @Column()
    @IsIn(['chờ đợi', 'đã đến', 'chưa đến', 'không xác định'])
    status: string

    
    ////

    @Column()
    userId: number;

    @Column()
    hospitalId: number; 

    

    @Column()
    isshow: boolean
    
    @Column()
    created_at: number;

    @ManyToOne(() => Hospitals, (hospital) => hospital.id)
    hospital: Hospitals;

    @ManyToOne(() => Users, (user) => user.id)
    user: Users;

    
}