import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Notification } from "./notification.entity";
import { JwtService } from "@nestjs/jwt";
import { Users } from "src/users/users.entity";
import { Patient } from "src/patient/patient.entity";


export class NotificationService {
    constructor(
        @InjectRepository(Notification)
        private readonly noticationRepository: Repository<Notification>,
        @InjectRepository(Users)
        private readonly userRepository: Repository<Users>,
        @InjectRepository(Patient)
        private readonly patientRepository: Repository<Patient>,
        private readonly jwtService: JwtService
    ) { }

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
        const hospitalId = query.hospitalId || 0;

        const skip = (pageIndex - 1) * pageSize;

        let whereCondition = '';
        const parameters: any = {};

        if (hospitalId !== 0) {
            whereCondition += 'notification.hospitalId = :hospitalId';
            parameters.hospitalId = hospitalId;
        }

        if (userId) {
            if (whereCondition) whereCondition += ' AND ';
            whereCondition += 'notification.userId = :userId';
            parameters.userId = userId;
        }

        const qb = this.noticationRepository.createQueryBuilder('notification')
            .skip(skip)
            .take(pageSize)
            .orderBy('notification.id', 'DESC');
        if (whereCondition) {
            qb.where(whereCondition, parameters);
        }

        const [result, total] = await qb.getManyAndCount();

        const enrichedResult = await Promise.all(
            result.map(async (item: any) => {
                const user = await this.userRepository.findOne({
                    where: { id: item.userId },
                    select: ['id', 'fullName', 'email']
                });

                const patient = await this.patientRepository.createQueryBuilder('patient')
                    .where({id: item.patientId})
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
                    .getOne()

                return {
                    ...item,
                    user: user,
                    patient: patient
                };
            })
        );


        return {
            totalStatus: result.filter(item => item.status === 0).length,
            data: enrichedResult,
            total: total,
            pageIndex: pageIndex,
            pageSize: pageSize,
            totalPages: Math.ceil(total / pageSize),
        };
    }

    async updateStatus (req: any ,id: number, body: any) {
        if(id){
            const notication = await this.noticationRepository.findOne({
                where: {id}
            })

            if (!notication) {
                throw new Error('Notication not found');
            }
    
            const data = {
                status: body.status
            }

            Object.assign(notication, data);
            return await this.noticationRepository.save(notication);
        }
    }
}