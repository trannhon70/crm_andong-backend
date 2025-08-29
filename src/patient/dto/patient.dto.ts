import { IsBoolean, IsEmail, IsIn, IsNotEmpty, IsOptional } from 'class-validator';

export class PatientDto {
    name?: string;
    //giới tính
    gender?: string
    //tuổi
    yearOld?: number;
    //số điện thoaị
    phone?: string;
    //nội dung tư ván
    content?: string;
    //bệnh
    diseasesId?: number;
    //khoa
    departmentId?: number
    // nguồn đến
    mediaId?: number
    //thành phố
    cityId?: string
    districtId?: string
    //mã chuyên gia
    code?: string
    //thời gian hen
    appointmentTime?: number
    //thời gian nhắt hẹn
    reminderTime?: number
    //ghi chú
    note?: string
    //sua doi thời gian đăng ký
    editregistrationTime?: number
    // trạng thái
    status?: string
    // bác sĩ
    doctorId?: number
    //người tạo
    userId?: number;
    //bệnh viện 
    hospitalId?: number;
    chat?: string
    //ngày tạo
    created_at?: number;

    //mục điều trị
    treatment?: string;
    //nguyên nhân bệnh không đến
    reason?: string

    //hồ sơ tiếp nhận
    record?: string
}