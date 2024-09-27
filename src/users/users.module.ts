import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "./users.entity";
import { UserController } from "./users.controller";
import { UsersService } from "./users.service";
import { roleMiddleware } from "src/common/middleware/role.middleware";
import { AuthMiddleware } from "src/common/middleware/auth.middleware";
import { LoggerMiddleware } from "src/common/middleware/logger.middleware";
import { JwtModule, JwtService } from "@nestjs/jwt";


@Module({
    imports:[
      TypeOrmModule.forFeature([Users]),
      JwtModule.register({
        secret: 'secretKey', // Đặt secret key cho JWT
        signOptions: { expiresIn: '1h' }, // Token sẽ hết hạn trong 1 giờ
      }),
    ],
    controllers: [UserController],
    providers:[UsersService],
})

// export class UsersModule{}
export class UsersModule implements NestModule{
    constructor(private readonly jwtService: JwtService) {}
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(AuthMiddleware, LoggerMiddleware, roleMiddleware(['admin'], this.jwtService)) 
        //   .forRoutes('*'); // Áp dụng middleware cho tất cả các route
          .forRoutes({ path: 'user/create', method: RequestMethod.POST });
      }
}