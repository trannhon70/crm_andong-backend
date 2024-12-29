import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "src/users/users.entity";
import { District } from "./district.entity";
import { CustomJwtModule } from "src/common/auth/auth.module";
import { AuthMiddleware } from "src/common/middleware/auth.middleware";
import { LoggerMiddleware } from "src/common/middleware/logger.middleware";
import { City } from "src/city/city.entity";
import { districtController } from "./district.controller";
import { DistrictService } from "./district.service";
import { RedisModule } from "src/redis/redis.module";


@Module({
    imports:[
        TypeOrmModule.forFeature([Users,District, City ]),
        CustomJwtModule,
        RedisModule
    ],
    controllers: [districtController],
    providers:[DistrictService],
    exports:[]
})

export class DistrictModule implements NestModule {
  
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(AuthMiddleware, LoggerMiddleware) 
          .forRoutes(
            { path: 'district/create', method: RequestMethod.POST },
           
        ); 
    }
  }