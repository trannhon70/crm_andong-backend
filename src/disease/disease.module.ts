import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomJwtModule } from "src/common/auth/auth.module";
import { AuthMiddleware } from "src/common/middleware/auth.middleware";
import { LoggerMiddleware } from "src/common/middleware/logger.middleware";
import { Users } from "src/users/users.entity";
import { DiseaseController } from "./disease.controller";
import { DiseasesService } from "./disease.service";
import { Diseases } from "./disease.entity";
import { Hospitals } from "src/hospital/hospital.entity";
import { RedisModule } from "src/redis/redis.module";


@Module({
    imports:[
        TypeOrmModule.forFeature([Users, Diseases, Hospitals]),
        CustomJwtModule,
        RedisModule
    ],
    controllers: [DiseaseController],
    providers:[DiseasesService],
    exports:[]
})

export class DiseasesModule implements NestModule {
  
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(AuthMiddleware, LoggerMiddleware) 
          .forRoutes(
            { path: 'disease/create', method: RequestMethod.POST },
            { path: 'disease/delete/:id', method: RequestMethod.DELETE },
            { path: 'disease/get-paging', method: RequestMethod.GET },
            { path: 'disease/get-by-id/:id', method: RequestMethod.GET },
          
        ); 
    }
  }