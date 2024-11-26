import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Patient } from "./patient.entity";
import { currentTimestamp } from "utils/currentTimestamp";
import { PatientDto } from "./dto/patient.dto";
import { NotFoundException } from "@nestjs/common";
import { ChatPatient } from "src/chatPatient/chatPatient.entity";
import { extname } from "path";
import { v4 as uuidv4 } from "uuid";
import { HistoryPatient } from "src/historyPatient/historyPatient.entity";
import { STATUS } from "utils";
import { Notification } from "src/notification/notification.entity";
import { Users } from "src/users/users.entity";



export class PatientService {
    constructor(
        @InjectRepository(Patient)
        private readonly patientRepository: Repository<Patient>,
        @InjectRepository(ChatPatient)
        private readonly ChatPatientRepository: Repository<ChatPatient>,
        @InjectRepository(HistoryPatient)
        private readonly historyPatientRepository: Repository<HistoryPatient>,
        @InjectRepository(Notification)
        private readonly notificationRepository: Repository<Notification>,
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,

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
            name: body.name ? body.name : '' ,
            gender: body.gender ? body.gender : '',
            yearOld: body.yearOld ? body.yearOld : '' ,
            phone: body.phone ? body.phone : '',
            content: body.content ? body.content : '',
            diseasesId: body.diseasesId ? body.diseasesId : null ,
            departmentId: body.departmentId ? body.departmentId : null ,
            mediaId: body.mediaId ? body.mediaId : null ,
            cityId: body.cityId ? body.cityId : null ,
            districtId: body.districtId ? body.districtId : null,
            code: body.code ? body.code : null,
            appointmentTime: body.appointmentTime ? body.appointmentTime : 0,
            reminderTime: body.reminderTime ? body.reminderTime : 0,
            note: body.note ? body.note : '',
            editregistrationTime: body.editregistrationTime ? body.editregistrationTime : 0,
            status: body.status ? body.status : '',
            doctorId: body.doctorId ? body.doctorId : null,
            userId: userId,
            hospitalId: body.hospitalId ? body.hospitalId : null,
            chat: body.chat ? body.chat : '',
            created_at: currentTimestamp(),
            treatment: body.treatment ? body.treatment : '',
            record: body.record ? body.record : '',
            file: body.file ? body.file : '',
            money: body.money ? body.money : ''
            
            
        }

        const todo = this.patientRepository.create(data);
       const result : any =  await this.patientRepository.save(todo)
        
       const dataHis: any = {
            patientId: result.id ? result.id : 0 ,
            name: result.name ? result.name : '' ,
            gender: result.gender ? result.gender : '',
            yearOld: result.yearOld ? result.yearOld : '' ,
            phone: result.phone ? result.phone : '',
            content: result.content ? result.content : '',
            diseasesId: result.diseasesId ? result.diseasesId : null ,
            departmentId: result.departmentId ? result.departmentId : null ,
            mediaId: result.mediaId ? result.mediaId : null ,
            cityId: result.cityId ? result.cityId : null ,
            districtId: result.districtId ? result.districtId : null,
            code: result.code ? result.code : null,
            appointmentTime: result.appointmentTime ? result.appointmentTime : 0,
            reminderTime: result.reminderTime ? result.reminderTime : 0,
            note: result.note ? result.note : '',
            editregistrationTime: result.editregistrationTime ? result.editregistrationTime : 0,
            status: result.status ? result.status : '',
            doctorId: result.doctorId ? result.doctorId : null,
            userId: result.userId ? result.userId : null,
            hospitalId: result.hospitalId ? result.hospitalId : null,
            chat: result.chat ? result.chat : '',
            created_at: result.created_at,
            treatment: result.treatment ? result.treatment : '',
            record: result.record ? result.record : '',
            file: result.file ? result.file : '',
            money: result.money ? result.money : '',
            action: 'THÊM',
       
    }

        const history = this.historyPatientRepository.create(dataHis);
        return await this.historyPatientRepository.save(history);
      
    }

    async getpaging(req: any, query: any) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            throw new Error('Authorization token is missing');
        }

        const decoded = await this.jwtService.verify(token);
        const userId = decoded.id;

        const pageIndex = query.pageIndex ? parseInt(query.pageIndex, 10) : 1;
        const pageSize = query.pageSize ? parseInt(query.pageSize, 10) : 10;
        const search = query.search ? query.search.trim() : '';
        const hospitalId = query.hospitalId || 0;
        const doctorId = query.doctorId || 0;
        const status = query.status;
        const departmentId = query.departmentId;
        const diseasesId = query.diseasesId;
        const mediaId = query.mediaId;
        const created_at = query.created_at ? JSON.parse(query.created_at) : '';
        const appointmentTime = query.appointmentTime ? JSON.parse(query.appointmentTime) : '';
        const viewAllData = query.viewAllData ;
        const skip = (pageIndex - 1) * pageSize;
        let whereCondition = '';
        const parameters: any = {};

        if (hospitalId !== 0) {
            whereCondition += 'patient.hospitalId = :hospitalId';
            parameters.hospitalId = hospitalId;
        }

        if (viewAllData === 'false') {
            if (whereCondition) whereCondition += ' AND ';
            whereCondition += 'patient.userId = :userId';
            parameters.userId = Number(userId);
        }

        if (search) {
            if (whereCondition) whereCondition += ' AND ';
            whereCondition += '(patient.name LIKE :search OR patient.phone LIKE :search OR patient.code LIKE :search)';
            parameters.search = `%${search}%`;
        }

        if(doctorId){
            if (whereCondition) whereCondition += ' AND ';
            whereCondition += 'patient.doctorId = :doctorId';
            parameters.doctorId = doctorId;
        }
        if(status){
            if (whereCondition) whereCondition += ' AND ';
            whereCondition += 'patient.status = :status';
            parameters.status = status;
        }

        if(departmentId){
            if (whereCondition) whereCondition += ' AND ';
            whereCondition += 'patient.departmentId = :departmentId';
            parameters.departmentId = departmentId;
        }

        if(diseasesId){
            if (whereCondition) whereCondition += ' AND ';
            whereCondition += 'patient.diseasesId = :diseasesId';
            parameters.diseasesId = diseasesId;
        }

        if(mediaId){
            if (whereCondition) whereCondition += ' AND ';
            whereCondition += 'patient.mediaId = :mediaId';
            parameters.mediaId = mediaId;
        }

        if (created_at) {
            if (whereCondition) whereCondition += ' AND ';
            whereCondition += 'patient.created_at BETWEEN :startDate AND :endDate';
            parameters.startDate = created_at[0]; // Không cần dấu hỏi và dấu chấm
            parameters.endDate = created_at[1] + 86399 ; // Tương tự
        }
        if (appointmentTime) {
            if (whereCondition) whereCondition += ' AND ';
            whereCondition += 'patient.appointmentTime BETWEEN :startDate AND :endDate';
            parameters.startDate = appointmentTime[0]; // Không cần dấu hỏi và dấu chấm
            parameters.endDate = appointmentTime[1] + 86399 ; // Tương tự
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
            const dataHis : any = {
                patientId: result.id ? result.id : 0 ,
                name: result.name ? result.name : '' ,
                gender: result.gender ? result.gender : '',
                yearOld: result.yearOld ? result.yearOld : '' ,
                phone: result.phone ? result.phone : '',
                content: result.content ? result.content : '',
                diseasesId: result.diseasesId ? result.diseasesId : null ,
                departmentId: result.departmentId ? result.departmentId : null ,
                mediaId: result.mediaId ? result.mediaId : null ,
                cityId: result.cityId ? result.cityId : null ,
                districtId: result.districtId ? result.districtId : null,
                code: result.code ? result.code : null,
                appointmentTime: result.appointmentTime ? result.appointmentTime : 0,
                reminderTime: result.reminderTime ? result.reminderTime : 0,
                note: result.note ? result.note : '',
                editregistrationTime: result.editregistrationTime ? result.editregistrationTime : 0,
                status: result.status ? result.status : '',
                doctorId: result.doctorId ? result.doctorId : null,
                userId: userId,
                hospitalId: result.hospitalId ? result.hospitalId : null,
                chat: result.chat ? result.chat : '',
                treatment: result.treatment ? JSON.stringify( result?.treatment) : '',
                record: result.record ? result.record : '',
                file: result.file ? result.file : '',
                money: result.money ? result.money : '',
                action: 'XÓA',
                created_at: currentTimestamp(),
            }

            const history = this.historyPatientRepository.create(dataHis);
            await this.historyPatientRepository.save(history);

            return await this.patientRepository.delete(id) 
        }
    }

    async updateNotication(patientId: number, hospitalId : number) {
        if (patientId) {
           const users = await this.usersRepository.find()
            users.map(async(item : any) => {
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
                record: body?.record,
                money: body?.money,
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
            

            const dataHis : any = {
                patientId: result.id ? result.id : 0 ,
                name: result.name ? result.name : '' ,
                gender: result.gender ? result.gender : '',
                yearOld: result.yearOld ? result.yearOld : '' ,
                phone: result.phone ? result.phone : '',
                content: result.content ? result.content : '',
                diseasesId: result.diseasesId ? result.diseasesId : null ,
                departmentId: result.departmentId ? result.departmentId : null ,
                mediaId: result.mediaId ? result.mediaId : null ,
                cityId: result.cityId ? result.cityId : null ,
                districtId: result.districtId ? result.districtId : null,
                code: result.code ? result.code : null,
                appointmentTime: result.appointmentTime ? result.appointmentTime : 0,
                reminderTime: result.reminderTime ? result.reminderTime : 0,
                note: result.note ? result.note : '',
                editregistrationTime: result.editregistrationTime ? result.editregistrationTime : 0,
                status: result.status ? result.status : '',
                doctorId: result.doctorId ? result.doctorId : null,
                userId: result.userId ? result.userId : null,
                hospitalId: result.hospitalId ? result.hospitalId : null,
                chat: result.chat ? result.chat : '',
                treatment: result.treatment ? JSON.stringify( result?.treatment) : '',
                record: result.record ? result.record : '',
                file: result.file ? result.file : '',
                money: result.money ? result.money : '',
                action: 'CẬP NHẬT',
                created_at: currentTimestamp(),
            }

            const history = this.historyPatientRepository.create(dataHis);
             await this.historyPatientRepository.save(history);

             if(result?.status === STATUS.DADEN){
              return await this.updateNotication(result.id, result?.hospitalId)
             }
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
                patientId: result.id ? result.id : 0 ,
                name: result.name ? result.name : '' ,
                gender: result.gender ? result.gender : '',
                yearOld: result.yearOld ? result.yearOld : '' ,
                phone: result.phone ? result.phone : '',
                content: result.content ? result.content : '',
                diseasesId: result.diseasesId ? result.diseasesId : null ,
                departmentId: result.departmentId ? result.departmentId : null ,
                mediaId: result.mediaId ? result.mediaId : null ,
                cityId: result.cityId ? result.cityId : null ,
                districtId: result.districtId ? result.districtId : null,
                code: result.code ? result.code : null,
                appointmentTime: result.appointmentTime ? result.appointmentTime : 0,
                reminderTime: result.reminderTime ? result.reminderTime : 0,
                note: result.note ? result.note : '',
                editregistrationTime: result.editregistrationTime ? result.editregistrationTime : 0,
                status: result.status ? result.status : '',
                doctorId: result.doctorId ? result.doctorId : null,
                userId: result.userId ? result.userId : null,
                hospitalId: result.hospitalId ? result.hospitalId : null,
                chat: result.chat ? result.chat : '',
                treatment: result.treatment ? JSON.stringify( result?.treatment) : '',
                record: result.record ? result.record : '',
                file: result.file ? result.file : '',
                money: result.money ? result.money : '',
                action: 'CẬP NHẬT',
                created_at: currentTimestamp(),
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

    async getThongKeNgayHienTai(req: any, query: any) {
        const hospitalId = Number(query.hospitalId) || 0;
        let whereCondition = '';
        const parameters: any = {};
    
        const currentDate = new Date();
        const startDate = new Date(currentDate.setHours(0, 0, 0, 0));
        const endDate = new Date(currentDate.setHours(23, 59, 59, 999));
        
        const startTimestamp = Math.floor(startDate.getTime() / 1000);
        const endTimestamp = Math.floor(endDate.getTime() / 1000);
        if (hospitalId !== 0) {
            whereCondition += 'patient.hospitalId = :hospitalId';
            parameters.hospitalId = hospitalId;
        }
        // Thêm điều kiện thời gian vào whereCondition
        if (startTimestamp && endTimestamp) {
            if (whereCondition) whereCondition += ' AND ';
            whereCondition += 'patient.appointmentTime BETWEEN :startDate AND :endDate';
            parameters.startDate = startTimestamp;
            parameters.endDate = endTimestamp;
        }
    
        const qb = this.patientRepository.createQueryBuilder('patient')
            .where(whereCondition, parameters)
            .orderBy('patient.id', 'DESC');
    
        const [result, total] = await qb.getManyAndCount();
    
        const daden = await this.patientRepository.createQueryBuilder('patient')
            .where(whereCondition, parameters)
            .andWhere('patient.status = :status', { status: STATUS.DADEN })
            .getCount();
            const chuaden = total - daden;
        
        return {  total, daden, chuaden };
    }

    async getThongKeAll(req: any, query: any) {
        const hospitalId = Number(query.hospitalId) || 0;
        let whereCondition = '';
        const parameters: any = {};
    
        if (hospitalId !== 0) {
            whereCondition += 'patient.hospitalId = :hospitalId';
            parameters.hospitalId = hospitalId;
        }
       
        const qb = this.patientRepository.createQueryBuilder('patient')
            .where(whereCondition, parameters)
            .orderBy('patient.id', 'DESC');
    
        const [result, total] = await qb.getManyAndCount();
    
        const daden = await this.patientRepository.createQueryBuilder('patient')
            .where(whereCondition, parameters)
            .andWhere('patient.status = :status', { status: STATUS.DADEN })
            .getCount();
            const chuaden = total - daden;
        
        return {  total, daden, chuaden }; 
    }
    
} 