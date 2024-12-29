import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomJwtModule } from "src/common/auth/auth.module";
import { AuthMiddleware } from "src/common/middleware/auth.middleware";
import { LoggerMiddleware } from "src/common/middleware/logger.middleware";
import { Departments } from "./department.entity";
import { DepartmentController } from "./department.controller";
import { DepartmentsService } from "./department.service";
import { Users } from "src/users/users.entity";
import { RedisModule } from "src/redis/redis.module";


@Module({
    imports:[
        TypeOrmModule.forFeature([Departments, Users]),
        CustomJwtModule,
        RedisModule
    ],
    controllers: [DepartmentController],
    providers:[DepartmentsService],
    exports:[]
})

export class DepartmentsModule implements NestModule {
  
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(AuthMiddleware, LoggerMiddleware) 
          .forRoutes(
            { path: 'department/create', method: RequestMethod.POST },
            { path: 'department/get-all/:id', method: RequestMethod.GET },
          
        ); 
    }
  }