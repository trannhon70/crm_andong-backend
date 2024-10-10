import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomJwtModule } from "src/common/auth/auth.module";
import { AuthMiddleware } from "src/common/middleware/auth.middleware";
import { LoggerMiddleware } from "src/common/middleware/logger.middleware";
import { Hospitals } from "src/hospital/hospital.entity";
import { Users } from "src/users/users.entity";
import { Doctor } from "./doctor.entity";
import { DiseaseController } from "./doctor.controller";
import { DoctorsService } from "./doctor.service";


@Module({
    imports:[
        TypeOrmModule.forFeature([Users, Hospitals, Doctor]),
        CustomJwtModule,
    ],
    controllers: [DiseaseController],
    providers:[DoctorsService],
    exports:[]
})

export class DoctorsModule implements NestModule {
  
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(AuthMiddleware, LoggerMiddleware) 
          .forRoutes(
            { path: 'doctor/create', method: RequestMethod.POST },
            { path: 'doctor/get-paging', method: RequestMethod.GET },
            { path: 'doctor/delete/:id', method: RequestMethod.DELETE },
            { path: 'doctor/get-by-id/:id', method: RequestMethod.DELETE },
            { path: 'doctor/update/:id', method: RequestMethod.DELETE },
           
          
        ); 
    }
  }