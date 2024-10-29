import { IsIn, MaxLength } from "class-validator";
import { City } from "src/city/city.entity";
import { Departments } from "src/department/department.entity";
import { Diseases } from "src/disease/disease.entity";
import { District } from "src/district/district.entity";
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
    @Column({ type: 'text',nullable: true })
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
    cityId:number
    @ManyToOne(() => City, (ci) => ci.id)
    city: City;

    @Column({nullable: true})
    districtId:number
    @ManyToOne(() => District, (dis) => dis.id)
    district: District;


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
    @Column({ type: 'text',nullable: true })
    note: string

    //sua doi thời gian đăng ký
    @Column()
    editregistrationTime: number

    // trạng thái
    @Column({ nullable: true })
    @IsIn(['CHỜ ĐỢI', 'ĐÃ ĐẾN', 'CHƯA ĐẾN', 'KHÔNG XÁC ĐỊNH'])
    status: string

    // bác sĩ
    @Column({ nullable: true })
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
    @Column({ type: 'text' ,nullable: true})
    chat:string

    //ngày tạo
    @Column()
    created_at: number;

    //mục điều trị
    @Column({ type: 'text',nullable: true })
    treatment:string
    
    //hồ sơ tiếp nhận
    @Column({ type: 'text' ,nullable: true})
    record:string
}