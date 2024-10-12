import { IsBoolean, IsEmail, IsIn, IsNotEmpty, IsOptional } from 'class-validator';

export class PatientDto {
    @IsNotEmpty()
    name: string;
    //giới tính
    @IsNotEmpty()
    gender: string
    //tuổi
    @IsNotEmpty()
    yearOld: number;
    //số điện thoaị
    @IsNotEmpty()
    phone: string;
    //nội dung tư ván
    content: string;
    //bệnh
    diseasesId: number;
    //khoa
    departmentId: number
    // nguồn đến
    mediaId: number
    //thành phố
    city:string
    district:string
    //mã chuyên gia
    code: string
    //thời gian hen
    appointmentTime: number
    //thời gian nhắt hẹn
    reminderTime: number
    //ghi chú
    note: string
    //sua doi thời gian đăng ký
    editregistrationTime: number
    // trạng thái
    status: string
    // bác sĩ
    doctorId: number
    //người tạo
    userId: number;
    //bệnh viện 
    hospitalId: number; 
    chat:string
    //ngày tạo
    created_at: number;

     //mục điều trị
     treatment:string
     
     //hồ sơ tiếp nhận
     record:string
}