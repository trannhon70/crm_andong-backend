import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}
  use(req: any, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    // Giả sử chúng ta cần token hợp lệ để tiếp tục
    if (!token) {
      throw new UnauthorizedException('Token không hợp lệ hoặc không tồn tại');
    }

    try {
      const decoded = this.jwtService.verify(token); // Xác thực token
      
      req.user = decoded; // Lưu thông tin người dùng vào request
      next();
    } catch (err) {
      throw new UnauthorizedException('Token không hợp lệ');
    }
  }
}