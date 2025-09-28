import { IsIn, MaxLength } from "class-validator";
import { ChatPatient } from "src/chatPatient/chatPatient.entity";
import { City } from "src/city/city.entity";
import { Departments } from "src/department/department.entity";
import { Diseases } from "src/disease/disease.entity";
import { District } from "src/district/district.entity";
import { Doctor } from "src/doctor/doctor.entity";
import { Files } from "src/files/file.entity";
import { Hospitals } from "src/hospital/hospital.entity";
import { Media } from "src/media/media.entity";
import { Users } from "src/users/users.entity";
import { Column, Entity, Index, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'patient' })
export class Patient {
    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @Column()
    name: string;

    //giới tính
    @Index()
    @Column()
    @IsIn(['NAM', 'NỮ', 'KHÔNG XÁC ĐỊNH'])
    gender: string

    //tuổi
    @Column()
    yearOld: number;

    //số điện thoaị
    @Index()
    @Column({ length: 12 })
    @MaxLength(12, { message: 'Phone number can not exceed 12 characters' })
    phone: string;

    //nội dung tư ván
    @Column({ type: 'text', nullable: true })
    content: string;

    //bệnh
    @Index()
    @Column({ nullable: true })
    diseasesId: number;

    @ManyToOne(() => Diseases, (diseases) => diseases.id)
    diseases: Diseases;

    //khoa
    @Index()
    @Column({ nullable: true })
    departmentId: number

    @ManyToOne(() => Departments, (de) => de.id)
    department: Departments;

    // nguồn đến
    @Index()
    @Column({ nullable: true })
    mediaId: number

    @ManyToOne(() => Media, (me) => me.id)
    media: Media;

    //thành phố
    @Column({ nullable: true })
    cityId: number
    @ManyToOne(() => City, (ci) => ci.id)
    city: City;

    @Column({ nullable: true })
    districtId: number
    @ManyToOne(() => District, (dis) => dis.id)
    district: District;


    //mã chuyên gia
    @Column({ nullable: true })
    code: string

    //xóa
    @Index()
    @Column({ nullable: true, default: 0 })
    delete: number

    //thời gian hen
    @Index()
    @Column({ nullable: true })
    appointmentTime: number

    //thời gian nhắt hẹn
    @Index()
    @Column({ nullable: true })
    reminderTime: number

    //ghi chú
    @Column({ type: 'text', nullable: true })
    note: string

    //sua doi thời gian đăng ký
    @Column({ nullable: true })
    editregistrationTime: number

    // trạng thái
    @Index()
    @Column({ nullable: true })
    @IsIn(['CHỜ ĐỢI', 'ĐÃ ĐẾN', 'CHƯA ĐẾN', 'KHÔNG XÁC ĐỊNH'])
    status: string

    // bác sĩ
    @Index()
    @Column({ nullable: true })
    doctorId: number
    @ManyToOne(() => Doctor, (doc) => doc.id)
    doctor: Doctor;

    //người tạo
    @Index()
    @Column({ nullable: true })
    userId: number;
    @ManyToOne(() => Users, (user) => user.id)
    user: Users;

    //bệnh viện 
    @Index()
    @Column({ nullable: true })
    hospitalId: number;
    @ManyToOne(() => Hospitals, (hospital) => hospital.id)
    hospital: Hospitals;

    //hồ sơ thăm khám qua điện thoại 
    @Column({ type: 'text', nullable: true })
    chat: string

    @OneToMany(() => ChatPatient, (chatPatient) => chatPatient.patient)
    chatPatients: ChatPatient[];

    //ngày tạo
    @Index()
    @Column({ nullable: true })
    created_at: number;

    //mục điều trị
    @Column({ type: 'text', nullable: true })
    treatment: string

    //hồ sơ tiếp nhận
    @Column({ type: 'text', nullable: true })
    record: string

    //hồ sơ tiếp nhận
    @Column({ type: 'text', nullable: true })
    file: string

    // Liên kết với bảng Files
    @OneToMany(() => Files, (file) => file.patient)
    files: Files[];

    //nguyên nhân bênh không đến
    @Column({ type: 'text', nullable: true })
    reason: string

    //chi phí
    @Column({ type: 'varchar', length: 125, nullable: true })
    money: string;
}