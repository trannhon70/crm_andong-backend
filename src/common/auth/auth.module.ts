import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secretKey', // Đặt secret key cho JWT
      signOptions: { expiresIn: '1h' }, // Token sẽ hết hạn trong 1 giờ
    }),
  ],
  providers: [ UsersService],
})
export class AuthModule {}