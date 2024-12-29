import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { expiresIn } from 'utils';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: expiresIn },
    }),
  ],
  exports: [ JwtModule],
})
export class CustomJwtModule {}
