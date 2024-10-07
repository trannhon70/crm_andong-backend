import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomJwtModule } from "src/common/auth/auth.module";
import { AuthMiddleware } from "src/common/middleware/auth.middleware";
import { LoggerMiddleware } from "src/common/middleware/logger.middleware";
import { Hospitals } from "src/hospital/hospital.entity";
import { HospitalsService } from "src/hospital/hospital.service";
import { Roles } from "src/roles/roles.entity";
import { RolesService } from "src/roles/roles.service";
import { UserController } from "./users.controller";
import { Users } from "./users.entity";
import { UsersService } from "./users.service";


@Module({
    imports:[
      TypeOrmModule.forFeature([Users, Roles, Hospitals]),
      CustomJwtModule,
    ],
    controllers: [UserController],
    providers:[UsersService, RolesService, HospitalsService],
    exports: [TypeOrmModule],
})
 
// export class UsersModule{}
export class UsersModule implements NestModule {
  
  configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(AuthMiddleware, LoggerMiddleware ) 
        .forRoutes(
          { path: 'user/create', method: RequestMethod.POST },
          { path: 'user/get-paging', method: RequestMethod.GET },
          { path: 'user/update-user/:id', method: RequestMethod.GET },
          { path: 'user/get-by-user', method: RequestMethod.GET },
          { path: 'user/active-user/:id', method: RequestMethod.PUT },
          { path: 'user/un-active-user/:id', method: RequestMethod.PUT },
          { path: 'user/delete-user/:id', method: RequestMethod.DELETE },
        ); // Apply middleware to all other routes
  }
}