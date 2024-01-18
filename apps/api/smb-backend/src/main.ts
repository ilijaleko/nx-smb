import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import * as admin from 'firebase-admin';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_AUTH_PROJECT_ID,
      privateKey: process.env.FIREBASE_AUTH_PRIVATE_KEY,
      clientEmail: process.env.FIREBASE_AUTH_CLIENT_EMAIL,
    }),
  });

  const globalPrefix = 'v1/api';
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(
    new ValidationPipe({
      // Automatically transform payloads to DTO instances
      transform: true,
      // Disable error messages in production
      disableErrorMessages:
        process.env.NODE_ENV === 'production' ? true : false,
      // Forbid unknown values instead of stripping them away
      forbidNonWhitelisted: true,
      whitelist: true,
    })
  );

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
