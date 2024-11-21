import { InjectRepository } from "@nestjs/typeorm";
import { Patient } from "./patient.entity";
import { Between, Repository } from "typeorm";
import { JwtService } from "@nestjs/jwt";
import { ChatPatient } from "src/chatPatient/chatPatient.entity";
import { HistoryPatient } from "src/historyPatient/historyPatient.entity";
import { STATUS } from "utils";
const dayjs = require('dayjs');


export class PatientServiceExport {
    constructor(
        @InjectRepository(Patient)
        private readonly patientRepository: Repository<Patient>,
        @InjectRepository(ChatPatient)
        private readonly ChatPatientRepository: Repository<ChatPatient>,
        @InjectRepository(HistoryPatient)
        private readonly historyPatientRepository: Repository<HistoryPatient>,

        private readonly jwtService: JwtService
    ) { }

    async getXuatDuLieuBenhNhan(req: any, query: any) {
        const pageIndex = query.pageIndex ? parseInt(query.pageIndex, 10) : 1;
        const pageSize = query.pageSize ? parseInt(query.pageSize, 10) : 10;
        const hospitalId = query.hospitalId || 0;
        const created_at = query.created_at ? JSON.parse(query.created_at) : '';
        const appointmentTime = query.appointmentTime ? JSON.parse(query.appointmentTime) : '';
        const doctorId = query.doctorId || 0;
        const status = query.status;
        const departmentId = query.departmentId;
        const diseasesId = query.diseasesId;
        const cityId = query.cityId;
        const districtId = query.districtId;

        const skip = (pageIndex - 1) * pageSize;

        let whereCondition = '';
        const parameters: any = {};

        if (hospitalId !== 0) {
            whereCondition += 'patient.hospitalId = :hospitalId';
            parameters.hospitalId = hospitalId;
        }

        if (doctorId) {
            if (whereCondition) whereCondition += ' AND ';
            whereCondition += 'patient.doctorId = :doctorId';
            parameters.doctorId = doctorId;
        }
        if (status) {
            if (whereCondition) whereCondition += ' AND ';
            whereCondition += 'patient.status = :status';
            parameters.status = status;
        }

        if (departmentId) {
            if (whereCondition) whereCondition += ' AND ';
            whereCondition += 'patient.departmentId = :departmentId';
            parameters.departmentId = departmentId;
        }

        if (diseasesId) {
            if (whereCondition) whereCondition += ' AND ';
            whereCondition += 'patient.diseasesId = :diseasesId';
            parameters.diseasesId = diseasesId;
        }

        if (created_at) {
            if (whereCondition) whereCondition += ' AND ';
            whereCondition += 'patient.created_at BETWEEN :startDate AND :endDate';
            parameters.startDate = created_at[0]; // Không cần dấu hỏi và dấu chấm
            parameters.endDate = created_at[1] + 86399; // Tương tự
        }
        if (appointmentTime) {
            if (whereCondition) whereCondition += ' AND ';
            whereCondition += 'patient.appointmentTime BETWEEN :startDate AND :endDate';
            parameters.startDate = appointmentTime[0]; // Không cần dấu hỏi và dấu chấm
            parameters.endDate = appointmentTime[1] + 86399; // Tương tự
        }

        if (cityId) {
            if (whereCondition) whereCondition += ' AND ';
            whereCondition += 'patient.cityId = :cityId';
            parameters.cityId = cityId;
        }

        if (districtId) {
            if (whereCondition) whereCondition += ' AND ';
            whereCondition += 'patient.districtId = :districtId';
            parameters.districtId = districtId;
        }

        const qb = this.patientRepository.createQueryBuilder('patient')
            .leftJoinAndSelect('patient.diseases', 'diseases')
            .leftJoinAndSelect('patient.department', 'department')
            .leftJoinAndSelect('patient.city', 'city')
            .leftJoinAndSelect('patient.district', 'district')
            .leftJoinAndSelect('patient.doctor', 'doctor')
            .leftJoinAndSelect('patient.user', 'user')
            .leftJoinAndSelect('patient.hospital', 'hospital')
            .leftJoinAndSelect('patient.media', 'media')
            .leftJoinAndSelect('patient.chatPatients', 'chatPatients')
            .leftJoinAndSelect('chatPatients.user', 'chatUser')
            .skip(skip)
            .take(pageSize)
            .orderBy('patient.id', 'DESC');
        if (whereCondition) {
            qb.where(whereCondition, parameters);
        }

        const [result, total] = await qb.getManyAndCount();
        return {
            data: result.map(patient => ({
                ...patient,
                hospital: patient.hospital, // Includes hospital data
                user: {
                    ...patient.user,
                    password: undefined // Exclude the password field
                },
                chatPatients: patient.chatPatients.map(chatPatient => ({
                    ...chatPatient,
                    user: chatPatient.user ? { fullName: chatPatient.user.fullName } : null // Include only fullName
                }))
            })),
            total: total,
            pageIndex: pageIndex,
            pageSize: pageSize,
            totalPages: Math.ceil(total / pageSize),
        };
    }

    async getBaoCaoTongHop(req: any, query: any) {
        try {
            const hospitalId = Number(query.hospitalId) || 0;
            const year = new Date().getFullYear()
            //lấy 3 năm gần nhất
            const listYear = [
                {
                    id: 1,
                    nam: year,
                    startTimestamp: dayjs(`${year}-01-01`).startOf('day').unix(),
                    endTimestamp: dayjs(`${year}-12-31`).endOf('day').unix()
                },
                {
                    id: 2,
                    nam: year - 1,
                    startTimestamp: dayjs(`${year - 1}-01-01`).startOf('day').unix(),
                    endTimestamp: dayjs(`${year - 1}-12-31`).endOf('day').unix()
                },
                {
                    id: 3,
                    nam: year - 2,
                    startTimestamp: dayjs(`${year - 2}-01-01`).startOf('day').unix(),
                    endTimestamp: dayjs(`${year - 2}-12-31`).endOf('day').unix()
                }
            ];
            //12 tháng gần nhất
            const currentMonth = dayjs();
            const last12Months = [];

            for (let i = 0; i < 12; i++) {
                const month = currentMonth.subtract(i, 'month');
                last12Months.push({
                    month: month.format('MM'), // Tháng (01 - 12)
                    year: month.format('YYYY'), // Năm
                    startTimestamp: month.startOf('month').unix(), // Bắt đầu tháng
                    endTimestamp: month.endOf('month').unix() // Kết thúc tháng
                });
            }

            const resultYear = await Promise.all(
                listYear.map(async (item: any) => {
                    const patient = await this.patientRepository.find({
                        where: {
                            hospitalId: hospitalId,
                            appointmentTime: Between(item.startTimestamp, item.endTimestamp)
                        }
                    })
                    return {
                        key: item.id,
                        year: item.nam,
                        total: patient.length || 0,
                        daDen: patient.filter(item => item.status === STATUS.DADEN).length || 0,
                        chuaDen: patient.filter(item => item.status !== STATUS.DADEN).length || 0,
                        tile : patient.length > 0 ?  (Number(patient.filter(item => item.status === STATUS.DADEN).length)/ Number(patient.length) * 100) : 0
                    }
                })
            )

            const resultMonth = await Promise.all(
                last12Months.map(async (item: any, index :number) => {
                    const patient = await this.patientRepository.find({
                        where: {
                            hospitalId: hospitalId,
                            appointmentTime: Between(item.startTimestamp, item.endTimestamp)
                        }
                    })
                    return {
                        key: index, 
                        year: item.year,
                        month: item.month,
                        total: patient.length || 0,
                        daDen: patient.filter(item => item.status === STATUS.DADEN).length || 0,
                        chuaDen: patient.filter(item => item.status !== STATUS.DADEN).length || 0,
                        tile : patient.length > 0 ?  (Number(patient.filter(item => item.status === STATUS.DADEN).length)/ Number(patient.length) * 100) : 0
                    }
                })
            )
            return {
                resultYear: resultYear,
                resultMonth: resultMonth
            }

        } catch (error) {
            console.log(error);

        }
    }
}