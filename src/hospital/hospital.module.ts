import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomJwtModule } from "src/common/auth/auth.module";
import { AuthMiddleware } from "src/common/middleware/auth.middleware";
import { LoggerMiddleware } from "src/common/middleware/logger.middleware";
import { Patient } from "src/patient/patient.entity";
import { Users } from "src/users/users.entity";
import { UsersModule } from "src/users/users.module";
import { HospitalController } from "./hospital.controller";
import { Hospitals } from "./hospital.entity";
import { HospitalsService } from "./hospital.service";
import { RedisModule } from "src/redis/redis.module";



@Module({
    imports:[
        TypeOrmModule.forFeature([Hospitals, Users, Patient]),
        CustomJwtModule,
        UsersModule,
        RedisModule
    ],
    controllers: [HospitalController],
    providers:[HospitalsService],
    exports: [TypeOrmModule],
})

export class HospitalsModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(AuthMiddleware, LoggerMiddleware) 
          .forRoutes(
            { path: 'hospital/get-paging', method: RequestMethod.GET },
            { path: 'hospital/create', method: RequestMethod.POST },
            { path: 'hospital/get-all', method: RequestMethod.GET },
            { path: 'hospital/get-by-id/:id', method: RequestMethod.GET },
          ); 
    }
}