import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "./users.entity";
import { UserController } from "./users.controller";
import { UsersService } from "./users.service";
import { roleMiddleware } from "src/common/middleware/role.middleware";
import { AuthMiddleware } from "src/common/middleware/auth.middleware";
import { LoggerMiddleware } from "src/common/middleware/logger.middleware";
import { CustomJwtModule } from "src/common/auth/auth.module";
import { Roles } from "src/roles/roles.entity";
import { RolesService } from "src/roles/roles.service";
import { Hospitals } from "src/hospital/hospital.entity";
import { HospitalsService } from "src/hospital/hospital.service";
import { HospitalsModule } from "src/hospital/hospital.module";
import { HospitalController } from "src/hospital/hospital.controller";


@Module({
    imports:[
      TypeOrmModule.forFeature([Users, Roles]),
      CustomJwtModule,
    ],
    controllers: [UserController],
    providers:[UsersService, RolesService],
    exports: [TypeOrmModule],
})
 
// export class UsersModule{}
export class UsersModule implements NestModule {
  
  configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(AuthMiddleware, LoggerMiddleware ) 
        .forRoutes(
          { path: 'user/create', method: RequestMethod.POST },
        ); // Apply middleware to all other routes
  }
}