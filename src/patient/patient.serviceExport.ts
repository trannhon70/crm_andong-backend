import { InjectRepository } from "@nestjs/typeorm";
import { Patient } from "./patient.entity";
import { Between, Repository } from "typeorm";
import { JwtService } from "@nestjs/jwt";
import { ChatPatient } from "src/chatPatient/chatPatient.entity";
import { HistoryPatient } from "src/historyPatient/historyPatient.entity";
import { SEX, STATUS } from "utils";
import { Departments } from "src/department/department.entity";
import { Diseases } from "src/disease/disease.entity";
import { Media } from "src/media/media.entity";
const dayjs = require('dayjs');


export class PatientServiceExport {
    constructor(
        @InjectRepository(Patient)
        private readonly patientRepository: Repository<Patient>,
        @InjectRepository(ChatPatient)
        private readonly ChatPatientRepository: Repository<ChatPatient>,
        @InjectRepository(HistoryPatient)
        private readonly historyPatientRepository: Repository<HistoryPatient>,
        @InjectRepository(Departments)
        private readonly departmentsRepository: Repository<Departments>,
        @InjectRepository(Diseases)
        private readonly diseasesRepository: Repository<Diseases>,
        @InjectRepository(Media)
        private readonly mediaRepository: Repository<Media>,
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
                        tile: patient.length > 0 ? (Number(patient.filter(item => item.status === STATUS.DADEN).length) / Number(patient.length) * 100) : 0
                    }
                })
            )

            const resultMonth = await Promise.all(
                last12Months.map(async (item: any, index: number) => {
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
                        tile: patient.length > 0 ? (Number(patient.filter(item => item.status === STATUS.DADEN).length) / Number(patient.length) * 100) : 0
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

    async getThongkeGioitinh(req: any, body: any) {
        const { hospitalId, time, picker, timeType, status, media } = body;

        const data = await Promise.all(
            time.map(async (item: any) => {
                const timeField = timeType === 'appointmentTime' ? 'appointmentTime' : 'created_at';

                // Xây dựng QueryBuilder
                const qb = this.patientRepository.createQueryBuilder('patient');

                // Điều kiện hospitalId
                if (hospitalId !== 0) {
                    qb.andWhere('patient.hospitalId = :hospitalId', { hospitalId });
                }

                // Điều kiện thời gian
                if (item.startTimestamp && item.endTimestamp) {
                    qb.andWhere(`patient.${timeField} BETWEEN :startDate AND :endDate`, {
                        startDate: item.startTimestamp,
                        endDate: item.endTimestamp,
                    });
                }
                // Điều kiện status
                if (status) {
                    qb.andWhere('patient.status = :status', { status });
                }

                // Điều kiện media
                if (media) {
                    qb.andWhere('patient.media = :media', { media });
                }


                const [result, total] = await qb.getManyAndCount();
                const NAM = result.filter((patient) => patient.gender === SEX.NAM).length;
                const NU = result.filter((patient) => patient.gender === SEX.NU).length;
                const KHONGXACDINH = result.filter((patient) => patient.gender === SEX.KHONGXACDINH).length;

                // Trả về kết quả cho từng khoảng thời gian
                return {
                    picker,
                    timeType,
                    month: item.month,
                    year: item.year,
                    day: item.day,
                    total,
                    NAM,
                    NU,
                    KHONGXACDINH,
                };
            })
        );

        return data;
    }
    async getThongkeTuoi(req: any, body: any) {
        const { hospitalId, time, picker, timeType, status, media } = body;
        const data = await Promise.all(
            time.map(async (item: any, index: number) => {
                const timeField = timeType === 'appointmentTime' ? 'appointmentTime' : 'created_at';

                // Xây dựng QueryBuilder
                const qb = this.patientRepository.createQueryBuilder('patient');

                // Điều kiện hospitalId
                if (hospitalId !== 0) {
                    qb.andWhere('patient.hospitalId = :hospitalId', { hospitalId });
                }

                // Điều kiện thời gian
                if (item.startTimestamp && item.endTimestamp) {
                    qb.andWhere(`patient.${timeField} BETWEEN :startDate AND :endDate`, {
                        startDate: item.startTimestamp,
                        endDate: item.endTimestamp,
                    });
                }
                // Điều kiện status
                if (status) {
                    qb.andWhere('patient.status = :status', { status });
                }

                // Điều kiện media
                if (media) {
                    qb.andWhere('patient.media = :media', { media });
                }

                const [result, total] = await qb.getManyAndCount();

                const _0To9Year = result.filter(item => item.yearOld >= 0 && item.yearOld < 10).length;
                const _10To14Year = result.filter(item => item.yearOld >= 10 && item.yearOld < 15).length;
                const _15To19Year = result.filter(item => item.yearOld >= 15 && item.yearOld < 20).length;
                const _20To24Year = result.filter(item => item.yearOld >= 20 && item.yearOld < 25).length;
                const _25To29Year = result.filter(item => item.yearOld >= 25 && item.yearOld < 30).length;
                const _30To34Year = result.filter(item => item.yearOld >= 30 && item.yearOld < 35).length;
                const _35To39Year = result.filter(item => item.yearOld >= 35 && item.yearOld < 40).length;
                const _40To44Year = result.filter(item => item.yearOld >= 40 && item.yearOld < 45).length;
                const _45To49Year = result.filter(item => item.yearOld >= 45 && item.yearOld < 50).length;
                const _50To54Year = result.filter(item => item.yearOld >= 50 && item.yearOld < 55).length;
                const _55To59Year = result.filter(item => item.yearOld >= 55 && item.yearOld < 60).length;
                const _60Year = result.filter(item => item.yearOld >= 60).length;

                // Trả về kết quả cho từng khoảng thời gian
                return {
                    key: index,
                    picker,
                    timeType,
                    month: item.month,
                    year: item.year,
                    day: item.day,
                    total,
                    _0To9Year,
                    _10To14Year,
                    _15To19Year,
                    _20To24Year,
                    _25To29Year,
                    _30To34Year,
                    _35To39Year,
                    _40To44Year,
                    _45To49Year,
                    _50To54Year,
                    _55To59Year,
                    _60Year,
                };
            })
        );

        return data;
    }

    async getThongkeTheoBenh(req: any, body: any) {
        const { hospitalId, time, picker, timeType, status, media, departmentId } = body;
        const diseases = await this.diseasesRepository.find({
            where: {departmentId : departmentId, hospitalId: hospitalId}
        })
        const data = await Promise.all(
            time.map(async (item: any, index: number) => {
                const timeField = timeType === 'appointmentTime' ? 'appointmentTime' : 'created_at';
                const qb = this.patientRepository.createQueryBuilder('patient')
                .leftJoinAndSelect('patient.diseases', 'diseases')

                if (hospitalId !== 0) {
                    qb.andWhere('patient.hospitalId = :hospitalId', { hospitalId });
                }

                if (item.startTimestamp && item.endTimestamp) {
                    qb.andWhere(`patient.${timeField} BETWEEN :startDate AND :endDate`, {
                        startDate: item.startTimestamp,
                        endDate: item.endTimestamp,
                    });
                }
                if (departmentId) {
                    qb.andWhere('patient.departmentId = :departmentId', { departmentId });
                }
                if (status) {
                    qb.andWhere('patient.status = :status', { status });
                }
                if (media) {
                    qb.andWhere('patient.media = :media', { media });
                }

                const [result, total] = await qb.getManyAndCount();

                const _1 = result.filter(item => item.diseasesId === diseases?.[0].id)
                const _2 = result.filter(item => item.diseasesId === diseases?.[1].id)
                const _3 = result.filter(item => item.diseasesId === diseases?.[2].id)

                const diseaseCounts = diseases
                .filter((disease) => result.some((item) => item.diseasesId === disease.id)) // Lọc diseases có id trùng với diseasesId trong result
                .map((disease) => ({
                    id: disease.id,
                    name: disease.name,
                    count: result.filter((item) => item.diseasesId === disease.id).length, // Đếm số lượng trùng
                }));

                return {
                    key: index,
                    picker,
                    timeType,
                    month: item.month,
                    year: item.year,
                    day: item.day,
                    total,
                    benh: diseaseCounts || 0
                };
            })
        )
        return {
            data: data,
            diseases: diseases.sort((a, b) => a.id - b.id)
        };
    }

    async getThongkeTheoNguonTruyenThong(req: any, body: any) {
        const { hospitalId, time, picker, timeType, status } = body;
        const media = await this.mediaRepository.find({
            where: {
                hospitalId: hospitalId
            }
        })

        const data = await Promise.all(
            time.map(async (item: any, index: number) => {
                const timeField = timeType === 'appointmentTime' ? 'appointmentTime' : 'created_at';
                const qb = this.patientRepository.createQueryBuilder('patient')
                .leftJoinAndSelect('patient.diseases', 'diseases')

                if (hospitalId !== 0) {
                    qb.andWhere('patient.hospitalId = :hospitalId', { hospitalId });
                }

                if (item.startTimestamp && item.endTimestamp) {
                    qb.andWhere(`patient.${timeField} BETWEEN :startDate AND :endDate`, {
                        startDate: item.startTimestamp,
                        endDate: item.endTimestamp,
                    });
                }
              
                if (status) {
                    qb.andWhere('patient.status = :status', { status });
                }
               

                const [result, total] = await qb.getManyAndCount();

             

                const mediaCounts = media
                .filter((media) => result.some((item) => item.mediaId === media.id)) // Lọc medias có id trùng với mediasId trong result
                .map((media) => ({
                    id: media.id,
                    name: media.name,
                    count: result.filter((item) => item.mediaId === media.id).length, // Đếm số lượng trùng
                }));

                return {
                    key: index,
                    picker,
                    timeType,
                    month: item.month,
                    year: item.year,
                    day: item.day,
                    total,
                    media: mediaCounts || 0
                };
            })
        )
        return {
            data: data,
            media: media.sort((a, b) => a.id - b.id)
        };
        
    }

    async getThongkeTheoTinhTrang(req: any, body: any) {
        const { hospitalId, time, picker, timeType, media } = body;

        const data = await Promise.all(
            time.map(async (item: any) => {
                const timeField = timeType === 'appointmentTime' ? 'appointmentTime' : 'created_at';

                // Xây dựng QueryBuilder
                const qb = this.patientRepository.createQueryBuilder('patient');

                // Điều kiện hospitalId
                if (hospitalId !== 0) {
                    qb.andWhere('patient.hospitalId = :hospitalId', { hospitalId });
                }

                // Điều kiện thời gian
                if (item.startTimestamp && item.endTimestamp) {
                    qb.andWhere(`patient.${timeField} BETWEEN :startDate AND :endDate`, {
                        startDate: item.startTimestamp,
                        endDate: item.endTimestamp,
                    });
                }
               
                // Điều kiện media
                if (media) {
                    qb.andWhere('patient.media = :media', { media });
                }


                const [result, total] = await qb.getManyAndCount();
                const CHODOI = result.filter((patient) => patient.status === STATUS.CHODOI).length;
                const CHUADEN = result.filter((patient) => patient.status === STATUS.CHUDEN).length;
                const DADEN = result.filter((patient) => patient.status === STATUS.DADEN).length;
                const KHONGXACDINH = result.filter((patient) => patient.status === STATUS.KHONGXACDINH).length;
                const percent = total > 0 ? (DADEN / total) * 100 : 0
                // Trả về kết quả cho từng khoảng thời gian
                return {
                    picker,
                    timeType,
                    month: item.month,
                    year: item.year,
                    day: item.day,
                    total,
                    CHODOI,
                    CHUADEN,
                    DADEN,
                    KHONGXACDINH,
                    percent : percent.toFixed(2)
                };
            })
        );

        return data;
    }
}