import { InjectRepository } from "@nestjs/typeorm";
import { Between, Repository } from "typeorm";
import { Patient } from "./patient.entity";
import { ChatPatient } from "src/chatPatient/chatPatient.entity";
import { HistoryPatient } from "src/historyPatient/historyPatient.entity";
import { JwtService } from "@nestjs/jwt";
import { currentDate, lastMonth, STATUS, thisMonth, yearly, yesterday } from "utils";
import { Users } from "src/users/users.entity";
import { Media } from "src/media/media.entity";
import { Departments } from "src/department/department.entity";
import { Diseases } from "src/disease/disease.entity";


export class PatientServiceStatistical {
    constructor(
        @InjectRepository(Patient)
        private readonly patientRepository: Repository<Patient>,
        @InjectRepository(ChatPatient)
        private readonly ChatPatientRepository: Repository<ChatPatient>,
        @InjectRepository(HistoryPatient)
        private readonly historyPatientRepository: Repository<HistoryPatient>,
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,
        @InjectRepository(Media)
        private readonly mediaRepository: Repository<Media>,
        @InjectRepository(Departments)
        private readonly departmentsRepository: Repository<Departments>,
        @InjectRepository(Diseases)
        private readonly diseasesRepository: Repository<Diseases>,


        private readonly jwtService: JwtService
    ) { }

    async GetThongKeDangKy(req: any, query: any) {
        const hospitalId = Number(query.hospitalId) || 0;
        if (!hospitalId) return;

        const timeRanges = {
            currentDate: currentDate(),
            yesterday: yesterday(),
            thisMonth: thisMonth(),
            lastMonth: lastMonth(),
            yearly: yearly(),
        };

        // Tạo 1 query chung cho tất cả thống kê
        const stats: any = {};
        for (const [key, range] of Object.entries(timeRanges)) {
            const result = await this.patientRepository.createQueryBuilder('patient')
                .select([
                    'COUNT(*) as tong',
                    `SUM(CASE WHEN patient.status = :daden THEN 1 ELSE 0 END) as daden`,
                    `SUM(CASE WHEN patient.status != :daden THEN 1 ELSE 0 END) as chuaden`,
                    `SUM(CASE WHEN patient.status = :khongxacdinh THEN 1 ELSE 0 END) as chuaquyetdinh`
                ])
                .where(hospitalId ? 'patient.hospitalId = :hospitalId' : '1=1', { hospitalId })
                .andWhere('patient.delete = :delete', { delete: 0 })
                .andWhere('patient.appointmentTime BETWEEN :startDate AND :endDate', {
                    startDate: range.startTimestamp,
                    endDate: range.endTimestamp
                })
                .setParameters({ daden: STATUS.DADEN, khongxacdinh: STATUS.KHONGXACDINH })
                .getRawOne();

            stats[key] = {
                tong: Number(result.tong),
                daden: Number(result.daden),
                chuaden: Number(result.chuaden),
                chuaquyetdinh: Number(result.chuaquyetdinh),
            };
        }

        // Tách ra thành 2 object như trước nếu muốn
        return {
            TKDangKy: {
                currentDate: { tong: stats.currentDate.tong, daden: stats.currentDate.daden, chuaden: stats.currentDate.chuaden },
                yesterday: { tong: stats.yesterday.tong, daden: stats.yesterday.daden, chuaden: stats.yesterday.chuaden },
                thisMonth: { tong: stats.thisMonth.tong, daden: stats.thisMonth.daden, chuaden: stats.thisMonth.chuaden },
                lastMonth: { tong: stats.lastMonth.tong, daden: stats.lastMonth.daden, chuaden: stats.lastMonth.chuaden },
                yearly: { tong: stats.yearly.tong, daden: stats.yearly.daden, chuaden: stats.yearly.chuaden },
            },
            TKCuocHenChuaQuyetDinh: {
                currentDate: { tong: stats.currentDate.chuaquyetdinh },
                yesterday: { tong: stats.yesterday.chuaquyetdinh },
                thisMonth: { tong: stats.thisMonth.chuaquyetdinh },
                lastMonth: { tong: stats.lastMonth.chuaquyetdinh },
                yearly: { tong: stats.yearly.chuaquyetdinh },
            }
        };
    }


    async GetDanhSachXepHangThamKham(req: any, query: any) {
        const hospitalId = Number(query.hospitalId) || 0;
        const IsDelete = 0
        if (hospitalId) {
            const buildQuery = async (timeRange: { startTimestamp: number; endTimestamp: number }, status: string) => {
                let whereCondition = '';
                const parameters: any = {};

                if (hospitalId !== 0) {
                    whereCondition += 'patient.hospitalId = :hospitalId';
                    parameters.hospitalId = hospitalId;
                }

                if (timeRange.startTimestamp && timeRange.endTimestamp) {
                    if (whereCondition) whereCondition += ' AND ';
                    whereCondition += 'patient.appointmentTime BETWEEN :startDate AND :endDate';
                    parameters.startDate = timeRange.startTimestamp;
                    parameters.endDate = timeRange.endTimestamp;
                }

                if (status !== '') {
                    if (whereCondition) whereCondition += ' AND ';
                    whereCondition += 'patient.status = :status';
                    parameters.status = status;
                }
                if (IsDelete === 0) {
                    if (whereCondition) whereCondition += ' AND ';
                    whereCondition += 'patient.delete = :delete';
                    parameters.delete = IsDelete;
                }

                const qb = this.patientRepository.createQueryBuilder('patient')
                    .leftJoinAndSelect('patient.user', 'user')
                    .select('user.id', 'userId')
                    .addSelect('user.fullName', 'userName')
                    .addSelect('COUNT(patient.id)', 'count')
                    .groupBy('user.id')
                    .limit(5)
                    .orderBy('count', 'DESC');

                if (whereCondition) {
                    qb.where(whereCondition, parameters);
                }

                const result = await qb.getRawMany();
                return result.map((item, index) => ({
                    ...item,
                    stt: index + 1
                }));
            };

            const DSXHDatChoThangNay = await buildQuery(thisMonth(), '');
            const DSXHDatChoThangTruoc = await buildQuery(lastMonth(), '');
            const DSXHThamKhamThangNay = await buildQuery(thisMonth(), STATUS.DADEN);
            const DSXHThamKhamThangTruoc = await buildQuery(lastMonth(), STATUS.DADEN);

            return {
                DSXHDatChoThangNay: {
                    result: DSXHDatChoThangNay,
                    total: DSXHDatChoThangNay.length
                },
                DSXHDatChoThangTruoc: {
                    result: DSXHDatChoThangTruoc,
                    total: DSXHDatChoThangTruoc.length
                },
                DSXHThamKhamThangNay: {
                    result: DSXHThamKhamThangNay,
                    total: DSXHThamKhamThangNay.length
                },
                DSXHThamKhamThangTruoc: {
                    result: DSXHThamKhamThangTruoc,
                    total: DSXHThamKhamThangTruoc.length
                }
            };
        }


    }

    async GetThongKeQuaKenh(req: any, query: any) {
        const hospitalId = Number(query.hospitalId) || 0;
        const { startTimestamp: currentStart, endTimestamp: currentEnd } = currentDate();
        const { startTimestamp: yesterdayStart, endTimestamp: yesterdayEnd } = yesterday();
        const { startTimestamp: thisMonthStart, endTimestamp: thisMonthEnd } = thisMonth();
        const { startTimestamp: lastMonthStart, endTimestamp: lastMonthEnd } = lastMonth();

        if (hospitalId) {
            const media = await this.mediaRepository.find({
                where: { hospitalId: hospitalId }
            });
            return Promise.all(
                media.map(async (item: any) => {
                    const findPatientsByDate = async (start: number, end: number) => {
                        return await this.patientRepository.find({
                            where: {
                                mediaId: item.id,
                                hospitalId: hospitalId,
                                appointmentTime: Between(start, end),
                                delete: 0
                            }
                        });
                    };
                    const [currentDate, yesterday, thisMonth, lastMonth] = await Promise.all([
                        findPatientsByDate(currentStart, currentEnd),
                        findPatientsByDate(yesterdayStart, yesterdayEnd),
                        findPatientsByDate(thisMonthStart, thisMonthEnd),
                        findPatientsByDate(lastMonthStart, lastMonthEnd),
                    ]);

                    return {
                        name: item.name,
                        currentDate: {
                            dukien: currentDate.length,
                            den: currentDate.filter(item => item.status === STATUS.DADEN).length || 0
                        },
                        yesterday: {
                            dukien: yesterday.length,
                            den: yesterday.filter(item => item.status === STATUS.DADEN).length || 0
                        },
                        thisMonth: {
                            dukien: thisMonth.length,
                            den: thisMonth.filter(item => item.status === STATUS.DADEN).length || 0
                        },
                        lastMonth: {
                            dukien: lastMonth.length,
                            den: lastMonth.filter(item => item.status === STATUS.DADEN).length || 0
                        },
                    };
                })
            );

        }
    }

    async GetThongKeKhoa(req: any, query: any) {
        const hospitalId = Number(query.hospitalId) || 0;
        const { startTimestamp: currentStart, endTimestamp: currentEnd } = currentDate();
        const { startTimestamp: yesterdayStart, endTimestamp: yesterdayEnd } = yesterday();
        const { startTimestamp: thisMonthStart, endTimestamp: thisMonthEnd } = thisMonth();
        const { startTimestamp: lastMonthStart, endTimestamp: lastMonthEnd } = lastMonth();

        if (hospitalId) {
            const department = await this.departmentsRepository.find({
                where: { hospitalId: hospitalId }
            });
            return Promise.all(
                department.map(async (item: any) => {
                    const findPatientsByDate = async (start: number, end: number) => {
                        return await this.patientRepository.find({
                            where: {
                                departmentId: item.id,
                                hospitalId: hospitalId,
                                appointmentTime: Between(start, end),
                                delete: 0
                            }
                        });
                    };
                    const [currentDate, yesterday, thisMonth, lastMonth] = await Promise.all([
                        findPatientsByDate(currentStart, currentEnd),
                        findPatientsByDate(yesterdayStart, yesterdayEnd),
                        findPatientsByDate(thisMonthStart, thisMonthEnd),
                        findPatientsByDate(lastMonthStart, lastMonthEnd),
                    ]);

                    return {
                        name: item.name,
                        currentDate: {
                            dukien: currentDate.length,
                            den: currentDate.filter(item => item.status === STATUS.DADEN).length || 0
                        },
                        yesterday: {
                            dukien: yesterday.length,
                            den: yesterday.filter(item => item.status === STATUS.DADEN).length || 0
                        },
                        thisMonth: {
                            dukien: thisMonth.length,
                            den: thisMonth.filter(item => item.status === STATUS.DADEN).length || 0
                        },
                        lastMonth: {
                            dukien: lastMonth.length,
                            den: lastMonth.filter(item => item.status === STATUS.DADEN).length || 0
                        },
                    };
                })
            );

        }
    }

    async GetThongKeBenh(req: any, query: any) {
        const hospitalId = Number(query.hospitalId) || 0;
        const { startTimestamp: currentStart, endTimestamp: currentEnd } = currentDate();
        const { startTimestamp: yesterdayStart, endTimestamp: yesterdayEnd } = yesterday();
        const { startTimestamp: thisMonthStart, endTimestamp: thisMonthEnd } = thisMonth();
        const { startTimestamp: lastMonthStart, endTimestamp: lastMonthEnd } = lastMonth();

        if (hospitalId) {
            const diseases = await this.diseasesRepository.find({
                where: { hospitalId: hospitalId }
            });
            return Promise.all(
                diseases.map(async (item: any) => {
                    const findPatientsByDate = async (start: number, end: number) => {
                        return await this.patientRepository.find({
                            where: {
                                diseasesId: item.id,
                                hospitalId: hospitalId,
                                appointmentTime: Between(start, end),
                                delete: 0
                            }
                        });
                    };
                    const [currentDate, yesterday, thisMonth, lastMonth] = await Promise.all([
                        findPatientsByDate(currentStart, currentEnd),
                        findPatientsByDate(yesterdayStart, yesterdayEnd),
                        findPatientsByDate(thisMonthStart, thisMonthEnd),
                        findPatientsByDate(lastMonthStart, lastMonthEnd),
                    ]);

                    return {
                        name: item.name,
                        currentDate: {
                            dukien: currentDate.length,
                            den: currentDate.filter(item => item.status === STATUS.DADEN).length || 0
                        },
                        yesterday: {
                            dukien: yesterday.length,
                            den: yesterday.filter(item => item.status === STATUS.DADEN).length || 0
                        },
                        thisMonth: {
                            dukien: thisMonth.length,
                            den: thisMonth.filter(item => item.status === STATUS.DADEN).length || 0
                        },
                        lastMonth: {
                            dukien: lastMonth.length,
                            den: lastMonth.filter(item => item.status === STATUS.DADEN).length || 0
                        },
                    };
                })
            );

        }
    }

    async GetThongKeTuVan(req: any, query: any) {
        const hospitalId = Number(query.hospitalId) || 0;
        const { startTimestamp: currentStart, endTimestamp: currentEnd } = currentDate();
        const { startTimestamp: yesterdayStart, endTimestamp: yesterdayEnd } = yesterday();
        const { startTimestamp: thisMonthStart, endTimestamp: thisMonthEnd } = thisMonth();
        const { startTimestamp: lastMonthStart, endTimestamp: lastMonthEnd } = lastMonth();

        if (hospitalId) {
            const users = await this.usersRepository.find({
                where: {
                    roleId: 2,
                    isshow: true
                }
            });

            const results = await Promise.all(
                users.map(async (item: any) => {
                    const checkHospital = JSON.parse(item?.hospitalId)
                    const check = checkHospital.filter(hos => hos === hospitalId)

                    if (check.length === 1) {
                        const findPatientsByDate = async (start: number, end: number) => {
                            return await this.patientRepository.find({
                                where: {
                                    userId: item.id,
                                    hospitalId: hospitalId,
                                    appointmentTime: Between(start, end),
                                    delete: 0
                                }
                            });
                        };
                        const [currentDate, yesterday, thisMonth, lastMonth] = await Promise.all([
                            findPatientsByDate(currentStart, currentEnd),
                            findPatientsByDate(yesterdayStart, yesterdayEnd),
                            findPatientsByDate(thisMonthStart, thisMonthEnd),
                            findPatientsByDate(lastMonthStart, lastMonthEnd),
                        ]);

                        return {
                            name: item.fullName,
                            currentDate: {
                                dukien: currentDate.length,
                                den: currentDate.filter(item => item.status === STATUS.DADEN).length || 0
                            },
                            yesterday: {
                                dukien: yesterday.length,
                                den: yesterday.filter(item => item.status === STATUS.DADEN).length || 0
                            },
                            thisMonth: {
                                dukien: thisMonth.length,
                                den: thisMonth.filter(item => item.status === STATUS.DADEN).length || 0
                            },
                            lastMonth: {
                                dukien: lastMonth.length,
                                den: lastMonth.filter(item => item.status === STATUS.DADEN).length || 0
                            },
                        };
                    }

                })
            );

            return results.filter(item => item);


        }
    }

}