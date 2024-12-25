import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Hospitals } from "src/hospital/hospital.entity";
import { Patient } from "src/patient/patient.entity";
import { Users } from "src/users/users.entity";
import { Files } from "./file.entity";
import { CustomJwtModule } from "src/common/auth/auth.module";
import { AuthMiddleware } from "src/common/middleware/auth.middleware";
import { LoggerMiddleware } from "src/common/middleware/logger.middleware";
import { FileController } from "./file.controller";
import { FileService } from "./file.service";



@Module({
    imports:[
        TypeOrmModule.forFeature([Users, Hospitals, Patient, Files]),
        CustomJwtModule,
    ],
    controllers: [FileController],
    providers:[FileService],
})


export class FileModule implements NestModule {
  
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(AuthMiddleware, LoggerMiddleware) 
          .forRoutes(
            // { path: 'notication/get-paging', method: RequestMethod.GET },
           
        ); 
    }
  }