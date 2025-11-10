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

    async getPaging(req: any, query: any) {
        // 🧩 1. Xác thực JWT
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            throw new Error('Authorization token is missing');
        }

        let decoded: any;
        try {
            decoded = await this.jwtService.verify(token);
        } catch (e) {
            throw new Error('Invalid or expired token');
        }

        const userId = decoded.id;

        // 🧮 2. Phân trang kiểu keyset
        const limit = query.pageSize ? parseInt(query.pageSize, 10) : 10;
        const cursor = query.cursor ? Number(query.cursor) : null; // id cuối trang trước
        const hospitalId = query.hospitalId ? Number(query.hospitalId) : 0;

        // 🧱 3. Xây điều kiện WHERE
        const conditions: string[] = [];
        const params: Record<string, any> = {};

        if (hospitalId) {
            conditions.push('notification.hospitalId = :hospitalId');
            params.hospitalId = hospitalId;
        }

        if (userId) {
            conditions.push('notification.userId = :userId');
            params.userId = userId;
        }

        // Keyset condition
        if (cursor) {
            conditions.push('notification.id < :cursor');
            params.cursor = cursor;
        }

        // 🧩 4. Query chính (JOIN đầy đủ)
        const qb = this.noticationRepository
            .createQueryBuilder('notification')
            // 🔹 Chỉ JOIN, không SELECT toàn bộ bảng
            .leftJoin('notification.user', 'user')
            .leftJoin('notification.patient', 'patient')
            .leftJoin('patient.hospital', 'hospital')
            .leftJoin('patient.department', 'department')
            .leftJoin('patient.city', 'city')
            .leftJoin('patient.district', 'district')
            .leftJoin('patient.doctor', 'doctor')
            .leftJoin('patient.user', 'puser')
            .leftJoin('patient.media', 'media')

            // 🔹 Chỉ lấy đúng các cột bạn cần
            .select([
                'notification.id',
                'notification.status',
                'notification.created_at',

                'user.name',

                'patient.id',
                'patient.fullname',
                'patient.gender',
                'patient.birthday',

                'hospital.name',
                'department.name',
                'city.name',
                'district.name',
                'doctor.name',
                'puser.name',
                'media.url',
            ])

            // 🔹 Nếu bạn vẫn cần chatPatients.user.name
            .leftJoin('patient.chatPatients', 'chatPatients')
            .leftJoin('chatPatients.user', 'chatUser')
            .addSelect(['chatPatients.id', 'chatUser.name'])

            .orderBy('notification.id', 'DESC')
            .limit(limit + 1); // keyset pagination: lấy thêm 1 để biết có trang sau

        if (conditions.length) {
            qb.where(conditions.join(' AND '), params);
        }

        const notifications = await qb.getMany();

        // 🧭 5. Tính toán phân trang
        const hasNextPage = notifications.length > limit;
        if (hasNextPage) notifications.pop();
        const nextCursor = hasNextPage ? notifications[notifications.length - 1].id : null;

        // 🧮 6. Đếm tổng (COUNT riêng để không JOIN — nhanh hơn)
        const countQb = this.noticationRepository.createQueryBuilder('notification');
        if (conditions.length) countQb.where(conditions.join(' AND '), params);
        const total = await countQb.getCount();

        // 🧾 7. Tổng số chưa đọc
        const unreadCount = await this.noticationRepository
            .createQueryBuilder('notification')
            .where('notification.status = :status', { status: 0 })
            .andWhere('notification.userId = :userId', { userId })
            .getCount();

        // ✅ 8. Trả về kết quả
        return {
            data: notifications,
            unreadCount,
            total,
            hasNextPage,
            nextCursor,
            pageSize: limit,
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