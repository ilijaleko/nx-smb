import { Module } from '@nestjs/common';
import { SharedPostsService } from './shared-posts.service';
import { SharedPostsController } from './shared-posts.controller';
import { PrismaClientModule } from '@nx-smb/prisma-client';

@Module({
  controllers: [SharedPostsController],
  providers: [SharedPostsService],
  imports: [PrismaClientModule],
})
export class SharedPostsModule {}
