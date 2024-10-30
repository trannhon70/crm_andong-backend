
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomJwtModule } from "src/common/auth/auth.module";
import { AuthMiddleware } from "src/common/middleware/auth.middleware";
import { LoggerMiddleware } from "src/common/middleware/logger.middleware";
import { ChatPatient } from "./chatPatient.entity";
import { ChatPatientController } from "./chatPatient.controller";
import { ChatPatientService } from "./chatPatient.service";
import { Users } from "src/users/users.entity";


@Module({
    imports:[
        TypeOrmModule.forFeature([Users,ChatPatient]),
        CustomJwtModule,
    ],
    controllers: [ChatPatientController],
    providers:[ChatPatientService],
    exports:[]
})

export class ChatPatientsModule implements NestModule {
  
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(AuthMiddleware, LoggerMiddleware) 
          .forRoutes(
            // { path: 'disease/create', method: RequestMethod.POST },
           
        ); 
    }
  }