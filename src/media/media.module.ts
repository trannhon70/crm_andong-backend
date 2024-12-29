import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomJwtModule } from "src/common/auth/auth.module";
import { AuthMiddleware } from "src/common/middleware/auth.middleware";
import { LoggerMiddleware } from "src/common/middleware/logger.middleware";
import { Users } from "src/users/users.entity";
import { MediaController } from "./media.controller";
import { MediaService } from "./media.service";
import { Media } from "./media.entity";
import { Hospitals } from "src/hospital/hospital.entity";
import { RedisModule } from "src/redis/redis.module";



@Module({
    imports:[
        TypeOrmModule.forFeature([Users, Media, Hospitals]),
        CustomJwtModule,
        RedisModule
    ],
    controllers: [MediaController],
    providers:[MediaService],
    exports:[]
})

export class MediaModule implements NestModule {
  
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(AuthMiddleware, LoggerMiddleware) 
          .forRoutes(
            { path: 'media/create', method: RequestMethod.POST },
           
          
        ); 
    }
  }