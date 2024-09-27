import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';

export function roleMiddleware(roles: string[],  jwtService: JwtService) {
  return (req: any, res: Response, next: NextFunction) => {
      // Kiểm tra xem vai trò của người dùng có trong danh sách vai trò cho phép không
      if (!roles.includes(req.user.role )) {
          return res.status(403).json({ message: 'Không có quyền truy cập' });
      }

      next();
  };
}