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
import { MyGateway } from "src/gateway/gateway";


@Module({
    imports:[
        TypeOrmModule.forFeature([Users, Patient, ChatPatient, HistoryPatient]),
        CustomJwtModule,
       
    ],
    controllers: [PatientController],
    providers:[PatientService, MyGateway],
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
           
        ); 
    }
  }