import { Module } from '@nestjs/common';
import { HistoryUserService } from './history_user.service';
import { HistoryUserController } from './history_user.controller';
import { HistoryUser } from './history_user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/users/users.entity';
import { CustomJwtModule } from 'src/common/auth/auth.module';
import { RedisModule } from 'nestjs-redis';

@Module({
  imports:[
        TypeOrmModule.forFeature([Users, HistoryUser]),
        CustomJwtModule,
        RedisModule
      ],
  controllers: [HistoryUserController],
  providers: [HistoryUserService],
})
export class HistoryUserModule {}
