import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { HistoryUser } from './history_user.entity';


@Injectable()
export class HistoryUserService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,

    @InjectRepository(HistoryUser)
    private readonly historyUserRepository: Repository<HistoryUser>,
  ) { }
  async create(req: any, body: any) {
    try {

    } catch (error) {
      console.log(error);
      throw error
    }
  }


}
