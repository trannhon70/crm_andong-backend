// task.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
    private readonly logger = new Logger(TaskService.name);
    constructor(
        @InjectRepository(Users)
        private readonly userRepository: Repository<Users>,
    ) { }
    @Cron('0 0 0 * * *', {
        timeZone: 'Asia/Ho_Chi_Minh', // Giờ Việt Nam
    })
    async handleMidnightTask() {
        this.logger.log('⏰ Cron chạy lúc 08:51 sáng giờ Việt Nam');
       return await this.userRepository.update({isshow: false}, {online: false});
    }
}
