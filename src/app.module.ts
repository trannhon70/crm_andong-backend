import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthMiddleware } from './common/middleware/auth.middleware';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { RolesModule } from './roles/roles.module';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';
import { HospitalsModule } from './hospital/hospital.module';
import { DepartmentsModule } from './department/department.module';
import { DiseasesModule } from './disease/disease.module';
import { MediaModule } from './media/media.module';
import { DoctorsModule } from './doctor/doctor.module';
import { CityModule } from './city/city.module';
import { DistrictModule } from './district/district.module';
import { ChatPatientsModule } from './chatPatient/chatPatient.module';
import { HistoryPatientsModule } from './historyPatient/historyPatient.module';
import { HistoryLoginModule } from './historyLogin/historyLogin.module';
import { PatientsModule } from './patient/patient.module';
import { NotificationModule } from './notification/notification.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { CrawlModule } from './crawl/crawl.module';
import { FileModule } from './files/file.module';
import { RedisModule } from './redis/redis.module';
import { PhoneBlacklistModule } from './phone-blacklist/phone-blacklist.module';
import { TaskService } from './common/cron_task/task.service';
import { ScheduleModule } from '@nestjs/schedule';
import { HistoryUserModule } from './history_user/history_user.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: parseInt(configService.get('DB_PORT')) || 3306,
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [join(process.cwd(), 'dist/**/*.entity.js')],
        synchronize: false,
        // logging: true
      }),
      inject: [ConfigService],

    }),
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'uploads'), // Thư mục chứa file tĩnh
      serveRoot: '/api/uploads',               // Đường dẫn để truy cập
    }),
    TodosModule,
    UsersModule,
    RolesModule,
    HospitalsModule,
    DepartmentsModule,
    DiseasesModule,
    MediaModule,
    DoctorsModule,
    PatientsModule,
    CityModule,
    DistrictModule,
    ChatPatientsModule,
    HistoryPatientsModule,
    HistoryLoginModule,
    NotificationModule,
    CrawlModule,
    FileModule,
    RedisModule,
    PhoneBlacklistModule,
    HistoryUserModule
  ],
  controllers: [AppController],
  providers: [AppService, TaskService],
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware, LoggerMiddleware)
      .exclude(
        // { path: 'user/create', method: RequestMethod.POST },
        { path: 'user/login', method: RequestMethod.POST } // Exclude login route
      )

  }
}
