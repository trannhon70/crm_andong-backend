import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "./users.entity";
import { UserController } from "./users.controller";
import { UsersService } from "./users.service";
import { roleMiddleware } from "src/common/middleware/role.middleware";
import { AuthMiddleware } from "src/common/middleware/auth.middleware";
import { LoggerMiddleware } from "src/common/middleware/logger.middleware";
import { CustomJwtModule } from "src/common/auth/auth.module";


@Module({
    imports:[
      TypeOrmModule.forFeature([Users]),
      CustomJwtModule,
    ],
    controllers: [UserController],
    providers:[UsersService],
})
 
// export class UsersModule{}
export class UsersModule implements NestModule {
  
  configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(AuthMiddleware, LoggerMiddleware ,roleMiddleware(['1'])) 
        .forRoutes({ path: 'user/create', method: RequestMethod.POST }); // Apply middleware to all other routes
  }
}