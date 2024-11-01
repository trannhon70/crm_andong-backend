import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Patient } from "./ patient.entity";
import { currentTimestamp } from "utils/currentTimestamp";
import { PatientDto } from "./dto/patient.dto";
import { NotFoundException } from "@nestjs/common";
import { ChatPatient } from "src/chatPatient/chatPatient.entity";
import { extname } from "path";
import { v4 as uuidv4 } from "uuid";
import { HistoryPatient } from "src/historyPatient/historyPatient.entity";



export class PatientService {
    constructor(
        @InjectRepository(Patient)
        private readonly patientRepository: Repository<Patient>,
        @InjectRepository(ChatPatient)
        private readonly ChatPatientRepository: Repository<ChatPatient>,
        @InjectRepository(HistoryPatient)
        private readonly historyPatientRepository: Repository<HistoryPatient>,

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
       const result : any =  await this.patientRepository.save(todo)
        
       const dataHis: any = {
        name: result?.name,
        gender: result?.gender,
        yearOld: result?.yearOld,
        phone: result?.phone,
        content: result?.content,
        diseasesId: result?.diseasesId,
        departmentId: result?.departmentId,
        mediaId: result?.mediaId,
        cityId: result?.cityId,
        districtId: result?.districtId,
        code: result?.code,
        appointmentTime: result?.appointmentTime,
        reminderTime: result?.reminderTime,
        note: result?.note,
        editregistrationTime: result?.editregistrationTime,
        status: result?.status,
        doctorId: result?.doctorId,
        hospitalId: result?.hospitalId,
        chat: result?.chat,
        userId: result?.userId,
        created_at: result?.created_at,
        treatment: result?.treatment,
        record: result.record,
        patientId: result.id,
        action: 'THÊM',
    }

        const history = this.historyPatientRepository.create(dataHis);
        return await this.historyPatientRepository.save(history);
      
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

    async getById(id: number) {
        if (id) {
            const result = await this.patientRepository.createQueryBuilder('patient')
                .leftJoinAndSelect('patient.diseases', 'diseases')
                .leftJoinAndSelect('patient.department', 'department')
                .leftJoinAndSelect('patient.city', 'city')
                .leftJoinAndSelect('patient.district', 'district')
                .leftJoinAndSelect('patient.doctor', 'doctor')
                .leftJoinAndSelect('patient.user', 'user')
                .leftJoinAndSelect('user.role', 'role')
                .leftJoinAndSelect('patient.hospital', 'hospital')
                .leftJoinAndSelect('patient.media', 'media')
                .leftJoinAndSelect('patient.chatPatients', 'chatPatients')
                .leftJoinAndSelect('chatPatients.user', 'chatUser') // Join with user related to chatPatients
                .where('patient.id = :id', { id })
                .select([
                    'diseases',
                    'department',
                    'city',
                    'district',
                    'doctor',
                    'user.fullName',
                    'role.name',
                    'hospital',
                    'media',
                    'patient', // Select all columns from the patient table
                    'chatPatients', // Select all columns from chatPatients
                    'chatUser.fullName' // Select only the fullName column from chatUser
                ])
                .getOne();
            
            return result;
        }
    }

    async delete(req: any ,id: number) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            throw new Error('Authorization token is missing');
        }

        const decoded = await this.jwtService.verify(token);
        const userId = decoded.id;

        if (id) {
            const result = await this.patientRepository.findOne({
                where: { id },
            });
            const dataHis = {
                name: result?.name,
                gender: result?.gender,
                yearOld: result?.yearOld,
                phone: result?.phone,
                content: result?.content,
                diseasesId: result?.diseasesId,
                departmentId: result?.departmentId,
                mediaId: result?.mediaId,
                cityId: result?.cityId,
                districtId: result?.districtId,
                code: result?.code,
                appointmentTime: result?.appointmentTime,
                reminderTime: result?.reminderTime,
                note: result?.note,
                editregistrationTime: result?.editregistrationTime,
                status: result?.status,
                doctorId: result?.doctorId,
                hospitalId: result?.hospitalId,
                treatment:JSON.stringify( result?.treatment),
                record: result.record,
                userId: userId,
                patientId: result.id,
                action: 'XÓA',
                created_at: currentTimestamp(),
            }

            const history = this.historyPatientRepository.create(dataHis);
            await this.historyPatientRepository.save(history);

            return await this.patientRepository.delete(id)
            
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
                treatment:JSON.stringify( body?.treatment),
                record: body.record,
            } 

            
            // chat: JSON.stringify(body?.chat),
            if (body.chat !== null && body.chat !== undefined && body.chat !== '') {
                const chatPatient= {
                    name: body?.chat,
                    created_at: currentTimestamp(),
                    userId: userId,
                    patientId: patient.id
                } as any
                const chat = this.ChatPatientRepository.create(chatPatient);
                await this.ChatPatientRepository.save(chat)
            }
            
           

            Object.assign(patient, data);
            const result =  await this.patientRepository.save(patient);

            const dataHis = {
                name: result?.name,
                gender: result?.gender,
                yearOld: result?.yearOld,
                phone: result?.phone,
                content: result?.content,
                diseasesId: result?.diseasesId,
                departmentId: result?.departmentId,
                mediaId: result?.mediaId,
                cityId: result?.cityId,
                districtId: result?.districtId,
                code: result?.code,
                appointmentTime: result?.appointmentTime,
                reminderTime: result?.reminderTime,
                note: result?.note,
                editregistrationTime: result?.editregistrationTime,
                status: result?.status,
                doctorId: result?.doctorId,
                hospitalId: result?.hospitalId,
                treatment:JSON.stringify( result?.treatment),
                record: result.record,
                userId: userId,
                patientId: result.id,
                action: 'CẬP NHẬT',
                created_at: currentTimestamp(),
            }

            const history = this.historyPatientRepository.create(dataHis);
            return await this.historyPatientRepository.save(history);
        } 
    } 

    async uploadFile(file: Express.Multer.File, id: number) {
        const fileExt = extname(file.originalname);
        const filename = `${file.fieldname}-${uuidv4()}${fileExt}`;
        const filePath = `./uploads/${filename}`;

        if(id){
            const patient = await this.patientRepository.findOne({
                where: { id },
            });

            if (!patient) {
                throw new NotFoundException(`patient with ID ${id} not found`);
            }
            const data: any = {
                file: filename
            } 

            Object.assign(patient, data);
            const result = await this.patientRepository.save(patient);

            const dataHis: any = {
                name: result?.name,
                gender: result?.gender,
                yearOld: result?.yearOld,
                phone: result?.phone,
                content: result?.content,
                diseasesId: result?.diseasesId,
                departmentId: result?.departmentId,
                mediaId: result?.mediaId,
                cityId: result?.cityId,
                districtId: result?.districtId,
                code: result?.code,
                appointmentTime: result?.appointmentTime,
                reminderTime: result?.reminderTime,
                note: result?.note,
                editregistrationTime: result?.editregistrationTime,
                status: result?.status,
                doctorId: result?.doctorId,
                hospitalId: result?.hospitalId,
                chat: result?.chat,
                userId: result?.userId,
                created_at: result?.created_at,
                treatment: result?.treatment,
                record: result.record,
                patientId: result.id,
                file: result.file,
            }

            const history = this.historyPatientRepository.create(dataHis);
           return await this.historyPatientRepository.save(history);
            
        }

       
    }

    async getHistoryAction (id: number){
        if (id) {
            const result = await this.historyPatientRepository.createQueryBuilder('history-patient')
                .leftJoinAndSelect('history-patient.diseases', 'diseases')
                .leftJoinAndSelect('history-patient.department', 'department')
                .leftJoinAndSelect('history-patient.city', 'city')
                .leftJoinAndSelect('history-patient.district', 'district')
                .leftJoinAndSelect('history-patient.doctor', 'doctor')
                .leftJoinAndSelect('history-patient.user', 'user')
                .leftJoinAndSelect('user.role', 'role')
                .leftJoinAndSelect('history-patient.hospital', 'hospital')
                .leftJoinAndSelect('history-patient.media', 'media')
                .where('history-patient.id = :id', { id })
                .select([
                    'diseases',
                    'department',
                    'city',
                    'district',
                    'doctor',
                    'user.fullName',
                    'role.name',
                    'hospital',
                    'media',
                    'history-patient', // Select all columns from the patient table
                    
                ])
                .getOne();
            
            return result;
        }
    }
} 