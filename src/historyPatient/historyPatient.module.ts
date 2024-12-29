import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChatPatient } from "src/chatPatient/chatPatient.entity";
import { Users } from "src/users/users.entity";
import { HistoryPatient } from "./historyPatient.entity";
import { CustomJwtModule } from "src/common/auth/auth.module";
import { AuthMiddleware } from "src/common/middleware/auth.middleware";
import { LoggerMiddleware } from "src/common/middleware/logger.middleware";
import { HistoryPatientController } from "./historyPatient.controller";
import { HistoryPatientService } from "./historyPatient.service";
import { Patient } from "src/patient/patient.entity";
import { RedisModule } from "src/redis/redis.module";


@Module({
    imports:[
        TypeOrmModule.forFeature([Users, Patient, ChatPatient, HistoryPatient]),
        CustomJwtModule,
        RedisModule
    ],
    controllers: [HistoryPatientController],
    providers:[HistoryPatientService],
    exports:[]
})

export class HistoryPatientsModule implements NestModule {
  
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(AuthMiddleware, LoggerMiddleware) 
          .forRoutes(
            // { path: 'patient/create', method: RequestMethod.POST },
           
           
        ); 
    }
  }