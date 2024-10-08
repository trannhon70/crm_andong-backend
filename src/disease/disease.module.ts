import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomJwtModule } from "src/common/auth/auth.module";
import { AuthMiddleware } from "src/common/middleware/auth.middleware";
import { LoggerMiddleware } from "src/common/middleware/logger.middleware";
import { Users } from "src/users/users.entity";
import { DiseaseController } from "./disease.controller";
import { DiseasesService } from "./disease.service";
import { Diseases } from "./disease.entity";


@Module({
    imports:[
        TypeOrmModule.forFeature([Users, Diseases]),
        CustomJwtModule,
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
          
        ); 
    }
  }