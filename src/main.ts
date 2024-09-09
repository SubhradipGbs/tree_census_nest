import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { FormDataValidationPipe } from './form-data.validation';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    preflightContinue: false,
  });
  app.use(helmet());
  app.useGlobalPipes(
    // new FormDataValidationPipe(),
    new ValidationPipe({ whitelist: true, transform: true }),
  );
  app.use(helmet());
  await app.listen(3000);
}
bootstrap();
