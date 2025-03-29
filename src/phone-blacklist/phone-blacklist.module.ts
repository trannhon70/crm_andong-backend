import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { PhoneBlacklistService } from './phone-blacklist.service';
import { PhoneBlacklistController } from './phone-blacklist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomJwtModule } from 'src/common/auth/auth.module';
import { Users } from 'src/users/users.entity';
import { PhoneBlacklist } from './phone-blacklist.entity';
import { AuthMiddleware } from 'src/common/middleware/auth.middleware';
import { LoggerMiddleware } from 'src/common/middleware/logger.middleware';
import { Roles } from 'src/roles/roles.entity';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  imports:[
          TypeOrmModule.forFeature([Users, Roles,PhoneBlacklist]),
          CustomJwtModule,
          RedisModule
      ],
  controllers: [PhoneBlacklistController],
  providers: [PhoneBlacklistService],
})
// export class PhoneBlacklistModule {}

export class PhoneBlacklistModule implements NestModule {
  
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(AuthMiddleware, LoggerMiddleware) 
          .forRoutes(
            // { path: 'patient/create', method: RequestMethod.POST },
          
           
        ); 
    }
  }
