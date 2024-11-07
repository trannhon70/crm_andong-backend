import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomJwtModule } from "src/common/auth/auth.module";
import { AuthMiddleware } from "src/common/middleware/auth.middleware";
import { LoggerMiddleware } from "src/common/middleware/logger.middleware";
import { roleMiddleware } from "src/common/middleware/role.middleware";
import { RoleController } from "./roles.controller";
import { Roles } from "./roles.entity";
import { RolesService } from "./roles.service";
import { Users } from "src/users/users.entity";
import { UsersService } from "src/users/users.service";
import { Hospitals } from "src/hospital/hospital.entity";
import { HistoryLogin } from "src/historyLogin/historyLogin.entity";


@Module({
    imports:[
        TypeOrmModule.forFeature([Roles, Users, Hospitals, HistoryLogin]),
        CustomJwtModule,
    ],
    controllers: [RoleController],
    providers:[RolesService, UsersService],
})


export class RolesModule implements NestModule {
  
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(AuthMiddleware, LoggerMiddleware) 
          .forRoutes(
            { path: 'role/create', method: RequestMethod.POST },
            { path: 'role/get-paging', method: RequestMethod.GET },
            { path: 'role/get-by-id/:id', method: RequestMethod.GET },
            { path: 'role/get-all', method: RequestMethod.GET },
            { path: 'role/delete/:id', method: RequestMethod.DELETE },
            { path: 'role/update/:id', method: RequestMethod.PUT },
        ); 
    }
  }
