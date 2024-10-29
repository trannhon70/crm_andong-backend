import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Patient } from "./ patient.entity";
import { currentTimestamp } from "utils/currentTimestamp";
import { PatientDto } from "./dto/patient.dto";
import { NotFoundException } from "@nestjs/common";



export class PatientService {
    constructor(
        @InjectRepository(Patient)
        private readonly patientRepository: Repository<Patient>,

        private readonly jwtService: JwtService
    ) { }

    async create(req: any, body: any) {

        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            throw new Error('Authorization token is missing');
        }

        const decoded = await this.jwtService.verify(token);
        const userId = decoded.id;


        const data: any = {
            name: body?.name,
            gender: body?.gender,
            yearOld: body?.yearOld,
            phone: body?.phone,
            content: body?.content,
            diseasesId: body?.diseasesId,
            departmentId: body?.departmentId,
            mediaId: body?.mediaId,
            cityId: body?.cityId,
            districtId: body?.districtId,
            code: body?.code,
            appointmentTime: body?.appointmentTime,
            reminderTime: body?.reminderTime,
            note: body?.note,
            editregistrationTime: body?.editregistrationTime,
            status: body?.status,
            doctorId: body?.doctorId,
            hospitalId: body?.hospitalId,
            chat: body?.chat,
            userId: userId,
            created_at: currentTimestamp(),
            treatment: body?.treatment,
            record: body.record,

        }
        const todo = this.patientRepository.create(data);
        return await this.patientRepository.save(todo)
    }

    async getpaging(req: any, query: any) {
        const pageIndex = query.pageIndex ? parseInt(query.pageIndex, 10) : 1;
        const pageSize = query.pageSize ? parseInt(query.pageSize, 10) : 10;
        const search = query.search ? query.search.trim() : '';
        const hospitalId = query.hospitalId;

        const skip = (pageIndex - 1) * pageSize;

        let whereCondition = '';
        const parameters: any = {};

        if (hospitalId !== 0) {
            whereCondition += 'patient.hospitalId = :hospitalId';
            parameters.hospitalId = hospitalId;
        }

        if (search) {
            if (whereCondition) whereCondition += ' AND ';
            whereCondition += 'patient.name LIKE :search';
            parameters.search = `%${search}%`;
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
                }
            })),
            total: total,
            pageIndex: pageIndex,
            pageSize: pageSize,
            totalPages: Math.ceil(total / pageSize),
        };
    }

    async getById (id: number) {
        if(id){
            const result = await this.patientRepository.findOne({
                where: {id}
            })
            return result
        }
    }

    async delete(id: number) {
        if (id) {
            return this.patientRepository.delete(id)
        }
    }

    async update(req: any ,id: number, body: any) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            throw new Error('Authorization token is missing');
        }

        const decoded = await this.jwtService.verify(token);
        const userId = decoded.id;

        if (id) {
            const patient = await this.patientRepository.findOne({
                where: { id },
            });

            if (!patient) {
                throw new NotFoundException(`patient with ID ${id} not found`);
            }

            const data: any = {
                name: body?.name,
                gender: body?.gender,
                yearOld: body?.yearOld,
                phone: body?.phone,
                content: body?.content,
                diseasesId: body?.diseasesId,
                departmentId: body?.departmentId,
                mediaId: body?.mediaId,
                cityId: body?.cityId,
                districtId: body?.districtId,
                code: body?.code,
                appointmentTime: body?.appointmentTime,
                reminderTime: body?.reminderTime,
                note: body?.note,
                editregistrationTime: body?.editregistrationTime,
                status: body?.status,
                doctorId: body?.doctorId,
                hospitalId: body?.hospitalId,
                chat: JSON.stringify(body?.chat),
                treatment:JSON.stringify( body?.treatment),
                record: body.record,
            }

            Object.assign(patient, data);
            return await this.patientRepository.save(patient);
        }
    }
} 