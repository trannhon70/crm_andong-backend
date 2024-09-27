import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';

export function roleMiddleware(roles: string[]) {
  return (req: any, res: Response, next: NextFunction) => {
      const userRole = String(req.user.role);
      if (!roles.includes(userRole )) {
          return res.status(403).json({ message: 'Không có quyền!' });
      }
      next();
  };
}