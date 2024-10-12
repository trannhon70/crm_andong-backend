import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomJwtModule } from "src/common/auth/auth.module";
import { Users } from "src/users/users.entity";
import { City } from "./city.entity";
import { AuthMiddleware } from "src/common/middleware/auth.middleware";
import { LoggerMiddleware } from "src/common/middleware/logger.middleware";
import { cityController } from "./city.controller";
import { CityService } from "./city.service";


@Module({
    imports:[
        TypeOrmModule.forFeature([Users,City ]),
        CustomJwtModule,
    ],
    controllers: [cityController],
    providers:[CityService],
    exports:[]
})

export class CityModule implements NestModule {
  
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(AuthMiddleware, LoggerMiddleware) 
          .forRoutes(
            { path: 'city/create', method: RequestMethod.POST },
           
        ); 
    }
  }