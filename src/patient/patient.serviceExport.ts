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
import { Doctor } from "src/doctor/doctor.entity";
import { Users } from "src/users/users.entity";
import { currentTimestamp } from "utils/currentTimestamp";
import { Notification } from "src/notification/notification.entity";
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
        @InjectRepository(Doctor)
        private readonly doctorRepository: Repository<Doctor>,
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,
        private readonly jwtService: JwtService,
        @InjectRepository(Notification)
        private readonly notificationRepository: Repository<Notification>,
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
        const isDeleted = 0;
        const skip = (pageIndex - 1) * pageSize;

        let whereCondition = '';
        const parameters: any = {};

        if (hospitalId !== 0) {
            whereCondition += 'patient.hospitalId = :hospitalId';
            parameters.hospitalId = hospitalId;
        }

        if (isDeleted === 0) {
            if (whereCondition) whereCondition += ' AND ';
            whereCondition += 'patient.delete = :delete';
            parameters.delete = isDeleted;
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
            .orderBy('patient.appointmentTime', 'DESC');
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
                            appointmentTime: Between(item.startTimestamp, item.endTimestamp),
                            delete: 0
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
                            appointmentTime: Between(item.startTimestamp, item.endTimestamp),
                            delete: 0
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
        const IsDelete = 0;

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

                //danh sách chưa bị xóa
                if (IsDelete === 0) {
                    qb.andWhere('patient.delete = :delete', { delete: IsDelete });
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
        const IsDelete = 0
        const diseases = await this.diseasesRepository.find({
            where: { departmentId: departmentId, hospitalId: hospitalId }
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

                if (IsDelete === 0) {
                    qb.andWhere('patient.delete = :delete', { delete: IsDelete });
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
        const IsDelete = 0;
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

                if (IsDelete === 0) {
                    qb.andWhere('patient.delete = :delete', { delete: IsDelete });
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
        const IsDelete = 0
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

                if (IsDelete === 0) {
                    qb.andWhere('patient.delete = :delete', { delete: IsDelete });
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
                    percent: percent.toFixed(2)
                };
            })
        );

        return data;
    }

    async getThongkeTheoBacSi(req: any, body: any) {
        const { hospitalId, time, picker, timeType, status, media } = body;
        const IsDelete = 0;
        const doctor = await this.doctorRepository.find({
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
                if (media) {
                    qb.andWhere('patient.media = :media', { media });
                }

                if (IsDelete === 0) {
                    qb.andWhere('patient.delete = :delete', { delete: IsDelete });
                }

                const [result, total] = await qb.getManyAndCount();
                const doctorCounts = doctor
                    .filter((doctor) => result.some((item) => item.doctorId === doctor.id)) // Lọc doctors có id trùng với doctorsId trong result
                    .map((doctor) => ({
                        id: doctor.id,
                        name: doctor.name,
                        count: result.filter((item) => item.doctorId === doctor.id).length, // Đếm số lượng trùng
                    }));

                return {
                    key: index,
                    picker,
                    timeType,
                    month: item.month,
                    year: item.year,
                    day: item.day,
                    total,
                    doctor: doctorCounts || 0
                };
            })
        )
        return {
            data: data,
            doctor: doctor.sort((a, b) => a.id - b.id)
        };
    }

    async getThongkeTheoDichVuKhachHang(req: any, body: any) {
        const { hospitalId, time, picker, timeType, status, media } = body;
        const IsDelete = 0
        const users = await this.usersRepository.find({
            where: {
                roleId: 2,
                isshow: true
            }
        });

        const filteredUsers = await Promise.all(
            users.map(async (item: any) => {
                const checkHospital = JSON.parse(item?.hospitalId || '[]'); // Parse hospitalId
                const hasMatchingHospital = checkHospital.some((hos: number) => hos === Number(hospitalId)); // Kiểm tra trùng khớp
                return hasMatchingHospital ? item : null; // Nếu khớp, trả về user; nếu không, trả về null
            })
        );

        // Loại bỏ các giá trị null để chỉ giữ lại danh sách user khớp
        const matchingUsers = filteredUsers.filter(user => user !== null);

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
                if (media) {
                    qb.andWhere('patient.media = :media', { media });
                }

                if (IsDelete === 0) {
                    qb.andWhere('patient.delete = :delete', { delete: IsDelete });
                }

                const [result, total] = await qb.getManyAndCount();
                const usersCounts = matchingUsers
                    .filter((users) => result.some((item) => item.userId === users.id))
                    .map((users) => ({
                        id: users.id,
                        name: users.fullName,
                        count: result.filter((item) => item.userId === users.id).length,
                    }));

                return {
                    key: index,
                    picker,
                    timeType,
                    month: item.month,
                    year: item.year,
                    day: item.day,
                    total,
                    users: usersCounts || 0
                };
            })
        )
        return {
            data: data,
            users: matchingUsers.sort((a, b) => a.id - b.id)
        };
    }

    async importFileExcel(req: any, body: any) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            throw new Error('Authorization token is missing');
        }

        const decoded = await this.jwtService.verify(token);
        const userId = decoded.id;
        if (body.length > 0) {
            const promises = body.map(async (item: any) => {
                const data: any = {
                    name: item.name ? item.name : '',
                    gender: item.gender ? item.gender : '',
                    yearOld: item.yearOld ? item.yearOld : '',
                    phone: item.phone ? item.phone : '',
                    content: item.content ? item.content : '',
                    diseasesId: item.diseasesId ? item.diseasesId : null,
                    departmentId: item.departmentId ? item.departmentId : null,
                    mediaId: item.mediaId ? item.mediaId : null,
                    cityId: item.cityId ? item.cityId : null,
                    districtId: item.districtId ? item.districtId : null,
                    code: item.code ? item.code : null,
                    appointmentTime: item.appointmentTime ? item.appointmentTime : 0,
                    reminderTime: item.reminderTime ? item.reminderTime : 0,
                    note: item.note ? item.note : '',
                    editregistrationTime: item.editregistrationTime ? item.editregistrationTime : 0,
                    status: item.status ? item.status : '',
                    doctorId: item.doctorId ? item.doctorId : null,
                    userId: userId,
                    hospitalId: item.hospitalId ? item.hospitalId : null,
                    chat: item.chat ? item.chat : '',
                    created_at: currentTimestamp(),
                    treatment: item.treatment ? item.treatment : '',
                    record: item.record ? item.record : '',
                    file: item.file ? item.file : '',
                    money: item.money ? item.money : ''
                }
                const todo = this.patientRepository.create(data);
                return await this.patientRepository.save(todo)
            });
            await Promise.all(promises);
        }
    }

    async updatePatientMoney(req: any, body: any) {

        const { id, money } = body
        try {
            if (id) {
                const result = await this.patientRepository.update(
                    { id }, // Điều kiện để tìm bệnh nhân
                    { money } // Giá trị cần cập nhật
                );
                return {
                    message: 'Cập nhật thành công!',
                    result,
                };
            } else {
                return {
                    message: 'ID không được cung cấp!',
                };
            }
        } catch (error) {
            console.log(error);
            throw new Error('Đã xảy ra lỗi khi cập nhật thông tin bệnh nhân!');
        }
    }

    async updatePatientDoctorId(req: any, body: any) {

        const { patientId, doctorId } = body
        try {
            if (patientId) {
                const result = await this.patientRepository.update(
                    { id: patientId }, // Điều kiện để tìm bệnh nhân
                    { doctorId: doctorId === undefined ? null : doctorId } // Giá trị cần cập nhật
                );
                return {
                    message: 'Cập nhật thành công!',
                    result,
                };
            } else {
                return {
                    message: 'ID không được cung cấp!',
                };
            }
        } catch (error) {
            console.log(error);
            throw new Error('Đã xảy ra lỗi khi cập nhật thông tin bệnh nhân!');
        }
    }
    async updateNotication(patientId: number, hospitalId: number) {
        if (patientId) {
            const users = await this.usersRepository.find()
            users.map(async (item: any) => {
                if (Array.isArray(JSON.parse(item.hospitalId)) && JSON.parse(item.hospitalId).includes(hospitalId)) {
                    const dataRef = {
                        status: 0,
                        patientId: patientId,
                        userId: item.id,
                        hospitalId: hospitalId,
                        created_at: currentTimestamp()
                    }
                    const result = this.notificationRepository.create(dataRef);
                    return await this.notificationRepository.save(result);
                }
            })
        }
    }
    async updatePatientStatus(req: any, body: any) {
        const { patientId, status } = body
        try {
            if (patientId) {
                const patient = await this.patientRepository.findOne({
                    where: { id: patientId },
                });

                const dataRef: any = {
                    status: status,
                    appointmentTime: currentTimestamp()
                }

                Object.assign(patient, dataRef);
                const result = await this.patientRepository.save(patient);

                if (result?.status === STATUS.DADEN) {
                    await this.updateNotication(result.id, result?.hospitalId)
                }
                return {
                    message: 'Cập nhật thành công!',
                    result,
                };
            } else {
                return {
                    message: 'patientId không được cung cấp!',
                };
            }
        } catch (error) {
            console.log(error);
            throw new Error('Đã xảy ra lỗi khi cập nhật thông tin bệnh nhân!');
        }
    }

    async getBaoCaoKhuVuc(req: any, query: any) {
        try {
            const { hospitalId, cityId, districtId, time } = query;
            const timeCovert = JSON.parse(time);
            const isValidParam = (value: any) => {
                return (
                    value !== null &&
                    value !== undefined &&
                    value !== 'null' &&
                    value !== '' &&
                    value !== 'undefined' &&
                    !isNaN(Number(value))
                );
            };

            const result = await Promise.all(
                timeCovert.map(async (item: any) => {
                    const startTime = dayjs(item).startOf('month').unix();
                    const endTime = dayjs(item).endOf('month').unix();

                    const where: any = {
                        hospitalId: Number(hospitalId),
                        delete: 0,
                        appointmentTime: Between(startTime, endTime),
                    };

                    if (isValidParam(cityId)) {
                        where.cityId = Number(cityId); // ép kiểu
                    }

                    if (isValidParam(districtId)) {
                        where.districtId = Number(districtId); // ép kiểu
                    }


                    const patient = await this.patientRepository.find({ where });

                    const total = patient.length;
                    const countDADEN = patient.filter(item => item.status === STATUS.DADEN).length;
                    const percentage = total > 0 ? (countDADEN / total) * 100 : 0;

                    return {
                        year: item,
                        total,
                        total_da_den: countDADEN,
                        total_chua_den: total - countDADEN,
                        total_cho_doi: patient.filter(item => item.status === STATUS.CHODOI).length || 0,
                        ty_le: percentage,
                    };
                })
            );

            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updatePatientReason(req: any, body: any) {
        try {
            return await this.patientRepository.update({ id: body.id }, { reason: body.reason })
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}