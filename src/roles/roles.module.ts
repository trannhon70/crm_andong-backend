import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomJwtModule } from "src/common/auth/auth.module";
import { AuthMiddleware } from "src/common/middleware/auth.middleware";
import { LoggerMiddleware } from "src/common/middleware/logger.middleware";
import { roleMiddleware } from "src/common/middleware/role.middleware";
import { RoleController } from "./roles.controller";
import { Roles } from "./roles.entity";
import { RolesService } from "./roles.service";


@Module({
    imports:[
        TypeOrmModule.forFeature([Roles]),
        CustomJwtModule,
    ],
    controllers: [RoleController],
    providers:[RolesService],
})
export class RolesModule implements NestModule {
  
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(AuthMiddleware, LoggerMiddleware ,roleMiddleware(['1'])) 
          .forRoutes({ path: 'role/create', method: RequestMethod.POST }); 
    }
  }
