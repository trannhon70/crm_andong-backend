import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePhoneBlacklistDto } from './dto/create-phone-blacklist.dto';
import { UpdatePhoneBlacklistDto } from './dto/update-phone-blacklist.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { PhoneBlacklist } from './phone-blacklist.entity';
import { JwtService } from '@nestjs/jwt';
import { currentTimestamp } from 'utils/currentTimestamp';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class PhoneBlacklistService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
    @InjectRepository(PhoneBlacklist)
    private readonly PhoneBlacklistRepository: Repository<PhoneBlacklist>,
    private readonly jwtService: JwtService,
    private readonly redisService: RedisService,
  ) { }
  async create(req: any, body: any) {
    try {
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];
      if (!token) {
        throw new Error('Authorization token is missing');
      }

      const decoded = await this.jwtService.verify(token);
      const userId = decoded.id;
      const check = await this.PhoneBlacklistRepository.findOne({
        where:{
          phone: body.phone
        }
      })
      console.log(check);
      
      if (check) {
        throw new BadRequestException('Số điện thoại này đã tồn tại!');
      }
      const dataRef = {
        phone: body.phone,
        userId: userId,
        created_at: currentTimestamp()
      }

      const blacklist = await this.PhoneBlacklistRepository.create(dataRef);
      return await this.PhoneBlacklistRepository.save(blacklist);
    } catch (error) {
      console.log(error);
      throw error
    }
  }

  async delete(req: any, param: any) {
    try {
      if (param.id) {
        return await this.PhoneBlacklistRepository.delete(param)
      }
    } catch (error) {
      console.log(error);
      throw error
    }
  }

  async getPaging(req: any, query: any) {
    try {
      const pageIndex = query.pageIndex ? parseInt(query.pageIndex, 10) : 1;
      const pageSize = query.pageSize ? parseInt(query.pageSize, 10) : 10;
      const skip = (pageIndex - 1) * pageSize;
      let whereCondition = '';
      const parameters: any = {};

      const qb = this.PhoneBlacklistRepository.createQueryBuilder('phone_black_list')
      .leftJoinAndSelect('phone_black_list.user', 'user')
        .skip(skip)
        .take(pageSize)
        .orderBy('phone_black_list.id', 'DESC');

      if (whereCondition) {
        qb.where(whereCondition, parameters);
      }
      const [result, total] = await qb.getManyAndCount();

      return {
        data: result,
        total: total,
        pageIndex: pageIndex,
        pageSize: pageSize,
        totalPages: Math.ceil(total / pageSize),
      };
    } catch (error) {
      console.log(error);
      throw error
    }
  }
}
