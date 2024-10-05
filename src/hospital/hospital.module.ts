import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomJwtModule } from "src/common/auth/auth.module";
import { HospitalController } from "./hospital.controller";
import { AuthMiddleware } from "src/common/middleware/auth.middleware";
import { LoggerMiddleware } from "src/common/middleware/logger.middleware";
import { HospitalsService } from "./hospital.service";
import { Hospitals } from "./hospital.entity";
import { Users } from "src/users/users.entity";
import { UsersService } from "src/users/users.service";
import { UsersModule } from "src/users/users.module";



@Module({
    imports:[
        TypeOrmModule.forFeature([Hospitals, Users]),
        CustomJwtModule,
        UsersModule 
    ],
    controllers: [HospitalController],
    providers:[HospitalsService, UsersService],
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