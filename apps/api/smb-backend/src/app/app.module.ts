import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirebaseAuthMiddleware } from '../middleware/firebase-auth.middleware';
import { SharedPostsModule } from './shared-posts/shared-posts.module';

@Module({
  imports: [ConfigModule.forRoot({ cache: true }), SharedPostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FirebaseAuthMiddleware)
      // TODO: This doesn't handle "api" prefix because NestJs have a bug
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
