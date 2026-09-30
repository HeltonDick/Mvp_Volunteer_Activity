import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: 'http://localhost:3000' });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove campos que não estão no DTO
      forbidNonWhitelisted: true, // erro se mandar campo a mais
      transform: true, // converte tipos automaticamente (ex: string -> number em params)
    }),
  );

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
