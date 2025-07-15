import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomJwtModule } from "src/common/auth/auth.module";
import { AuthMiddleware } from "src/common/middleware/auth.middleware";
import { LoggerMiddleware } from "src/common/middleware/logger.middleware";
import { Users } from "src/users/users.entity";
import { Patient } from "./patient.entity";
import { PatientController } from "./patient.controller";
import { PatientService } from "./patient.service";
import { ChatPatient } from "src/chatPatient/chatPatient.entity";
import { HistoryPatient } from "src/historyPatient/historyPatient.entity";
import { MyGateway } from "src/gateway/gateway";
import { PatientServiceStatistical } from "./patient.serviceStatistical";
import { Media } from "src/media/media.entity";
import { Departments } from "src/department/department.entity";
import { Diseases } from "src/disease/disease.entity";
import { PatientServiceExport } from "./patient.serviceExport";
import { Notification } from "src/notification/notification.entity";
import { Doctor } from "src/doctor/doctor.entity";
import { Files } from "src/files/file.entity";
import { RedisModule } from "src/redis/redis.module";
import { PhoneBlacklist } from "src/phone-blacklist/phone-blacklist.entity";


@Module({
    imports:[
        TypeOrmModule.forFeature([Users, Patient, ChatPatient, HistoryPatient, Media, Departments, Diseases, Notification, Doctor, Files, PhoneBlacklist]),
        CustomJwtModule,
        RedisModule
    ],
    controllers: [PatientController],
    providers:[PatientService, MyGateway, PatientServiceStatistical, PatientServiceExport],
    exports:[]
})

export class PatientsModule implements NestModule {
  
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(AuthMiddleware, LoggerMiddleware) 
          .forRoutes(
            { path: 'patient/create', method: RequestMethod.POST },
            { path: 'patient/get-paging', method: RequestMethod.GET },
            { path: 'patient/get-by-id/:id', method: RequestMethod.GET },
            { path: 'patient/delete/:id', method: RequestMethod.DELETE },
            { path: 'patient/update/:id', method: RequestMethod.PUT },
            { path: 'patient/upload/:id', method: RequestMethod.POST },
            { path: 'patient/get-history-action/:id', method: RequestMethod.GET },
            { path: 'patient/get-thong-ke-ngay-hien-tai', method: RequestMethod.GET },
            { path: 'patient/get-thong-ke-all', method: RequestMethod.GET },
            { path: 'patient/thong-ke-dang-ky', method: RequestMethod.GET },
            { path: 'patient/danh-sach-xep-hang-tham-kham', method: RequestMethod.GET },
            { path: 'patient/thong-ke-qua-kenh', method: RequestMethod.GET },
            { path: 'patient/thong-ke-khoa', method: RequestMethod.GET },
            { path: 'patient/thong-ke-benh', method: RequestMethod.GET },
            { path: 'patient/thong-ke-tu-van', method: RequestMethod.GET },
            { path: 'patient/xuat-du-lieu-benh-nhan', method: RequestMethod.GET },
            { path: 'patient/bao-cao-khu-vuc', method: RequestMethod.GET },
           
        ); 
    }
  }