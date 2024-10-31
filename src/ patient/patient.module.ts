import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomJwtModule } from "src/common/auth/auth.module";
import { AuthMiddleware } from "src/common/middleware/auth.middleware";
import { LoggerMiddleware } from "src/common/middleware/logger.middleware";
import { Users } from "src/users/users.entity";
import { Patient } from "./ patient.entity";
import { PatientController } from "./patient.controller";
import { PatientService } from "./patient.service";
import { ChatPatient } from "src/chatPatient/chatPatient.entity";
import { HistoryPatient } from "src/historyPatient/historyPatient.entity";


@Module({
    imports:[
        TypeOrmModule.forFeature([Users, Patient, ChatPatient, HistoryPatient]),
        CustomJwtModule,
    ],
    controllers: [PatientController],
    providers:[PatientService],
    exports:[]
})

export class PatientsModule implements NestModule {
  
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(AuthMiddleware, LoggerMiddleware) 
          .forRoutes(
            { path: 'disease/create', method: RequestMethod.POST },
           
        ); 
    }
  }