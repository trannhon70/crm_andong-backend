import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Patient } from "./ patient.entity";
import { currentTimestamp } from "utils/currentTimestamp";
import { PatientDto } from "./dto/patient.dto";



export class PatientService {
    constructor(
        @InjectRepository(Patient)
        private readonly patientRepository: Repository<Patient>,
       
        private readonly jwtService: JwtService
    ) { }

    async create(req: any, body: PatientDto) {

        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            throw new Error('Authorization token is missing');
        }

        const decoded = await this.jwtService.verify(token);
        const userId = decoded.id;

        const data: any = {
            name: body.name,
            gender: body.gender,
            yearOld: body.yearOld,
            phone: body.phone,
            content: body.content,
            diseasesId: body.diseasesId,
            departmentId: body.departmentId,
            mediaId: body.mediaId,
            city: body.city,
            district: body.district,
            code: body.code,
            appointmentTime: body.appointmentTime,
            reminderTime: body.reminderTime,
            note: body.note,
            editregistrationTime: body.editregistrationTime,
            status: body.status,
            doctorId: body.doctorId,
            hospitalId: body.hospitalId,
            chat: body.chat,
            userId: userId,
            created_at: currentTimestamp(),
            treatment: body.treatment,
            record: body.record,
           
        }
        const todo = this.patientRepository.create(data);
        return await this.patientRepository.save(todo)
    }
} 