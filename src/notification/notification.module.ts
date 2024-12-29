import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomJwtModule } from "src/common/auth/auth.module";
import { AuthMiddleware } from "src/common/middleware/auth.middleware";
import { LoggerMiddleware } from "src/common/middleware/logger.middleware";
import { Hospitals } from "src/hospital/hospital.entity";
import { Patient } from "src/patient/patient.entity";
import { Users } from "src/users/users.entity";
import { Notification } from "./notification.entity";
import { noticationController } from "./notification.controller";
import { NotificationService } from "./notification.service";
import { RedisModule } from "src/redis/redis.module";



@Module({
    imports:[
        TypeOrmModule.forFeature([Users, Hospitals, Patient, Notification]),
        CustomJwtModule,
        RedisModule
    ],
    controllers: [noticationController],
    providers:[NotificationService],
})


export class NotificationModule implements NestModule {
  
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(AuthMiddleware, LoggerMiddleware) 
          .forRoutes(
            { path: 'notication/get-paging', method: RequestMethod.GET },
            { path: 'notication/update-status/:id', method: RequestMethod.PUT },
           
        ); 
    }
  }