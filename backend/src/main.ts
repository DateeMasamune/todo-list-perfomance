import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  /**https://docs.nestjs.com/techniques/validation */
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(5000);
}
bootstrap();
