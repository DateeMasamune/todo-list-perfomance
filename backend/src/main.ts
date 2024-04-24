import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });

  app.useGlobalPipes(
    new ValidationPipe(),
  ); /**https://docs.nestjs.com/techniques/validation */
  app.enableCors(); /**https://docs.nestjs.com/security/cors */
  await app.listen(5000);
}
bootstrap();
