import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HistoryLogin } from "./historyLogin.entity";
import { CustomJwtModule } from "src/common/auth/auth.module";
import { AuthMiddleware } from "src/common/middleware/auth.middleware";
import { LoggerMiddleware } from "src/common/middleware/logger.middleware";
import { Users } from "src/users/users.entity";
import { HistoryLoginService } from "./historyLogin.service";
import { HistoryLoginController } from "./historyLogin.controller";
import { RedisModule } from "src/redis/redis.module";


@Module({
    imports:[
        TypeOrmModule.forFeature([Users, HistoryLogin]),
        CustomJwtModule,
        RedisModule
    ],
    controllers: [HistoryLoginController],
    providers:[HistoryLoginService],
    exports:[]
})

export class HistoryLoginModule implements NestModule { 
  
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(AuthMiddleware, LoggerMiddleware) 
          .forRoutes(
            // { path: 'patient/create', method: RequestMethod.POST },
           
           
        ); 
    }
  }