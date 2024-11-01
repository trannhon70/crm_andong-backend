import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Patient } from "src/ patient/ patient.entity";
import { ChatPatient } from "src/chatPatient/chatPatient.entity";
import { Users } from "src/users/users.entity";
import { HistoryPatient } from "./historyPatient.entity";
import { CustomJwtModule } from "src/common/auth/auth.module";
import { AuthMiddleware } from "src/common/middleware/auth.middleware";
import { LoggerMiddleware } from "src/common/middleware/logger.middleware";
import { HistoryPatientController } from "./historyPatient.controller";
import { HistoryPatientService } from "./historyPatient.service";


@Module({
    imports:[
        TypeOrmModule.forFeature([Users, Patient, ChatPatient, HistoryPatient]),
        CustomJwtModule,
       
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