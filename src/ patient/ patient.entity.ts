import { IsIn, MaxLength } from "class-validator";
import { Departments } from "src/department/department.entity";
import { Diseases } from "src/disease/disease.entity";
import { Doctor } from "src/doctor/doctor.entity";
import { Hospitals } from "src/hospital/hospital.entity";
import { Media } from "src/media/media.entity";
import { Users } from "src/users/users.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'patient' })
export class Patient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    //giới tính
    @Column()
    @IsIn(['NAM', 'NỮ', 'KHÔNG XÁC ĐỊNH'])
    gender: string

    //tuổi
    @Column()
    yearOld: number;

    //số điện thoaị
    @Column({ length: 12 })
    @MaxLength(12, { message: 'Phone number can not exceed 12 characters' })
    phone: string;

    //nội dung tư ván
    @Column({ type: 'text' })
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
    @Column()
    district:string

    //mã chuyên gia
    @Column()
    code: string

    //thời gian hen
    @Column()
    appointmentTime: number

    //thời gian nhắt hẹn
    @Column()
    reminderTime: number

    //ghi chú
    @Column({ type: 'text' })
    note: string

    //sua doi thời gian đăng ký
    @Column()
    editregistrationTime: number

    // trạng thái
    @Column()
    @IsIn(['chờ đợi', 'đã đến', 'chưa đến', 'không xác định'])
    status: string

    // bác sĩ
    @Column()
    doctorId: number
    @ManyToOne(() => Doctor, (doc) => doc.id)
    doctor: Doctor;

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

    //hồ sơ thăm khám qua điện thoại 
    @Column({ type: 'text' })
    chat:string

    //ngày tạo
    @Column()
    created_at: number;

    //mục điều trị
    @Column({ type: 'text' })
    treatment:string
    
    //hồ sơ tiếp nhận
    @Column({ type: 'text' })
    record:string
}