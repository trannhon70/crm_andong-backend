import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [process.env.URL_DEV_PRODUCTION, process.env.URL_DEV_LOCALHOST],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Nếu bạn cần sử dụng cookie hoặc xác thực thông qua CORS
  });

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/swagger', app, document);

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Bỏ qua các thuộc tính không được khai báo trong DTO
    forbidNonWhitelisted: true, // Ném lỗi nếu có thuộc tính không hợp lệ
    transform: true, // Tự động chuyển đổi kiểu dữ liệu theo DTO
  }));
  await app.listen(5000);
}
bootstrap();
