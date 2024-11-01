import { InjectRepository } from "@nestjs/typeorm";
import { HistoryPatient } from "./historyPatient.entity";
import { Repository } from "typeorm";


export class HistoryPatientService {
    constructor(
        @InjectRepository(HistoryPatient) 
        private readonly historyPatientRepository: Repository<HistoryPatient>,
    ){}

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
                .where('history-patient.patientId = :id', { id })
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
                .orderBy('history-patient.created_at', 'DESC')
                .getMany();
            
            return result;
        }
    }
}