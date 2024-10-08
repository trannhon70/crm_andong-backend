import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { JwtService, TokenExpiredError } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/users/users.entity';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>, // Inject repository cho User
  ) {}

  async use(req: any, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    // Kiểm tra xem token có hợp lệ hay không
    if (!token) {
      throw new UnauthorizedException('Token không hợp lệ hoặc không tồn tại');
    }

    try {
      const decoded = this.jwtService.verify(token); // Xác thực token
      req.user = decoded; // Lưu thông tin người dùng vào request
      next();
    } catch (err) {
      if (err instanceof TokenExpiredError) {
        // Xử lý trường hợp token hết hạn
        try {
          const decoded = this.jwtService.decode(token) as any; // Giải mã token (không xác thực)
          const userId = decoded?.id; // Lấy id của người dùng từ token

          if (userId) {
            // Tìm user theo id và cập nhật online = false
            const user = await this.userRepository.findOne({ where: { id: userId } });
            if (user) {
              user.online = false;
              await this.userRepository.save(user);
            }
          }
        } catch (decodeError) {
          throw new UnauthorizedException('Không thể giải mã token đã hết hạn.');
        }

        throw new UnauthorizedException('Token đã hết hạn. Vui lòng đăng nhập lại.');
      } else {
        // Xử lý các lỗi khác liên quan đến token
        throw new UnauthorizedException('Token không hợp lệ');
      }
    }
  }
}
