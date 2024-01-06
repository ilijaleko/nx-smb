import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
@Module({
  controllers: [],
  providers: [],
  exports: [],
})
export class PrismaClientModule {}
