import { BadRequestException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Patient } from "src/patient/patient.entity";
import { Users } from "src/users/users.entity";
import { Between, Like, Repository } from "typeorm";
import { currentDate, lastMonth, listMonthYear, STATUS, thisMonth, yesterday } from "utils";
import { currentTimestamp } from "utils/currentTimestamp";
import { HospitalDto } from "./dtos/hospital.dto";
import { Hospitals } from "./hospital.entity";
import { query } from "express";



export class HospitalsService {
    constructor(
        @InjectRepository(Patient)
        private readonly patientRepository: Repository<Patient>,
        @InjectRepository(Hospitals)
        private readonly hospitalsRepository: Repository<Hospitals>,
        private readonly jwtService: JwtService,
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,

    ) { }

    async create(body: HospitalDto, req: any) {
        const check = await this.hospitalsRepository.findOne({ where: { name: body.name } });
        if (check) {
            throw new BadRequestException('Tên Bệnh viện đã được đăng ký, vui lòng đăng ký tên khác!');
        }

        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            throw new Error('Authorization token is missing');
        }
        const decoded = await this.jwtService.verify(token);

        const data: HospitalDto = {
            name: body.name,
            phone: body.phone,
            author: decoded.email,
            created_at: currentTimestamp()
        }
        const todo = this.hospitalsRepository.create(data);
        return await this.hospitalsRepository.save(todo)
    }

    async getpaging(query: any) {
        const pageIndex = query.pageIndex ? parseInt(query.pageIndex, 10) : 1;
        const pageSize = query.pageSize ? parseInt(query.pageSize, 10) : 10;
        const search = query.search ? query.search.trim() : '';

        const skip = (pageIndex - 1) * pageSize;

        const [result, total] = await this.hospitalsRepository.findAndCount({
            // select: ['id', 'name', 'created_at'],
            where: search
                ? { name: Like(`%${search}%`) }
                : {},
            skip: skip,
            take: pageSize,
            order: {
                created_at: 'DESC',
            },
            // relations: ['users'],
        });

        return {
            data: result,
            total: total,
            pageIndex: pageIndex,
            pageSize: pageSize,
            totalPages: Math.ceil(total / pageSize),
        };
    }


    async getById(id: number) {
        if (id) {
            const result = await this.hospitalsRepository.findOne({
                where: { id }
            })
            return result
        }
    }

    async getAll() {
        const result = await this.hospitalsRepository.find()
        return result
    }

    async update(id: number, body: any) {
        const hospital = await this.hospitalsRepository.findOne({
            where: { id }
        });

        if (!hospital) {
            throw new Error('hospital not found');
        }

        Object.assign(hospital, body);
        return await this.hospitalsRepository.save(hospital);
    }

    async delete(id: number) {
        if (id) {
            return this.hospitalsRepository.delete(id)
        }
    }

    async thongKeChiTietDichVuKhachHang() {
        const hospitals = await this.hospitalsRepository.find();

        const getPatientStats = async (userId: number, hospitalId: number, startDate: number, endDate: number) => {
            const patients = await this.patientRepository.find({
                where: { userId, hospitalId, appointmentTime: Between(startDate, endDate) },
            });

            return {
                total: patients.length,
                totalArrived: patients.filter(pa => pa.status === STATUS.DADEN).length,
                totalNotArrived: patients.filter(pa => pa.status !== STATUS.DADEN).length,
            };
        };

        const result = await Promise.all(
            hospitals.map(async (hospital: any) => {
                const users = await this.usersRepository.find();
                const usersInHospital = users.filter((user: any) => {
                    try {
                        const hospitalIds = JSON.parse(user.hospitalId);
                        return Array.isArray(hospitalIds) && hospitalIds.includes(hospital.id);
                    } catch (error) {
                        console.error(`Failed to parse hospitalId for user ${user.id}:`, error);
                        return false;
                    }
                });

                const statsDates = {
                    today: currentDate(),
                    yesterday: yesterday(),
                    thisMonth: thisMonth(),
                    lastMonth: lastMonth(),
                };

                const usersWithPatients = await Promise.all(
                    usersInHospital.map(async (item) => {
                        const stats = await Promise.all(
                            Object.keys(statsDates).map(async (key) => {
                                const { startTimestamp, endTimestamp } = statsDates[key];
                                const patientStats = await getPatientStats(item.id, hospital.id, startTimestamp, endTimestamp);
                                return { [key]: patientStats };
                            })
                        );

                        const statsObject = stats.reduce((acc, stat) => ({ ...acc, ...stat }), {});

                        return {
                            id: item.id,
                            fullName: item.fullName,
                            ...statsObject,
                        };
                    })
                );

                return {
                    ...hospital,
                    users: {
                        user: usersWithPatients,
                        length: usersWithPatients.length,
                    },
                };
            })
        );

        return result;
    }


    async getBaoCaoXuhuongHangThang(query: any) {
        const hospitalId = query.hospitalId;
        const months = listMonthYear(); 
        if (hospitalId) {
            const data = await Promise.all(
                months.map(async (item: any) => {
                    const result = await this.patientRepository.find({
                        where: {
                            hospitalId: hospitalId,
                            appointmentTime: Between(item.startTimestamp, item.endTimestamp)
                        }
                    });
                    
                    return {
                        month: item.month,
                        year: item.year,
                        total: result.length,
                        totalDaDen: result.filter(item => item.status === STATUS.DADEN).length,
                        totalChuaDen: result.filter(item => item.status !== STATUS.DADEN).length,
                    };
                })
            );
            data.sort((a, b) => a.month - b.month);
            return data;
        }
    }
    
}   