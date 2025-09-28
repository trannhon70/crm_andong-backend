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
        // Lấy token
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            throw new Error('Authorization token is missing');
        }

        const decoded = await this.jwtService.verify(token);
        const userId = decoded.id;

        // Phân trang
        const pageIndex = query.pageIndex ? parseInt(query.pageIndex, 10) : 1;
        const pageSize = query.pageSize ? parseInt(query.pageSize, 10) : 10;
        const hospitalId = query.hospitalId || 0;
        const skip = (pageIndex - 1) * pageSize;

        // Điều kiện where
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

        // Query chính: join luôn user và patient cùng các quan hệ cần thiết
        const qb = this.noticationRepository.createQueryBuilder('notification')
            .leftJoinAndSelect('notification.user', 'user')
            .leftJoinAndSelect('notification.patient', 'patient')
            .leftJoinAndSelect('patient.diseases', 'diseases')
            .leftJoinAndSelect('patient.department', 'department')
            .leftJoinAndSelect('patient.city', 'city')
            .leftJoinAndSelect('patient.district', 'district')
            .leftJoinAndSelect('patient.doctor', 'doctor')
            .leftJoinAndSelect('patient.user', 'puser')
            .leftJoinAndSelect('patient.hospital', 'hospital')
            .leftJoinAndSelect('patient.media', 'media')
            .leftJoinAndSelect('patient.chatPatients', 'chatPatients')
            .leftJoinAndSelect('chatPatients.user', 'chatUser')
            .skip(skip)
            .take(pageSize)
            .orderBy('notification.id', 'DESC');

        if (whereCondition) {
            qb.where(whereCondition, parameters);
        }

        const [result, total] = await qb.getManyAndCount();

        return {
            totalStatus: result.filter(item => item.status === 0).length,
            data: result,
            total,
            pageIndex,
            pageSize,
            totalPages: Math.ceil(total / pageSize),
        };
    }



    async updateStatus(req: any, id: number, body: any) {
        if (id) {
            const notication = await this.noticationRepository.findOne({
                where: { id }
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

    async checkAllNotication(req: any, body: any) {
        try {
            const notificationIds = body.map((item: any) => item.id);
            const notifications = await this.noticationRepository.findByIds(notificationIds)
            notifications.forEach((notification) => {
                notification.status = 1;
            });
            return await this.noticationRepository.save(notifications);

        } catch (error) {
            console.log(error);
            throw error
        }
    }
}