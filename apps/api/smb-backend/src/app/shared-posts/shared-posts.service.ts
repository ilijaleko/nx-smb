import { Injectable } from '@nestjs/common';
import { CreateSharedPostDto } from './dto/create-shared-post.dto';
import { UpdateSharedPostDto } from './dto/update-shared-post.dto';
import { PrismaService } from '@nx-smb/prisma-client';
import { IApiResponse } from '../../shared/interfaces/api-response.interface';
import { SharedPost } from '@prisma/client';

@Injectable()
export class SharedPostsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createSharedPostDto: CreateSharedPostDto
  ): Promise<IApiResponse<SharedPost>> {
    const sharedPost = await this.prisma.sharedPost.create({
      data: { ...createSharedPostDto, createdBy: 'user-id' },
    });

    // TODO: Handle unique constraint error

    return {
      statusCode: 201,
      message: 'Shared post created successfully',
      data: sharedPost,
    };
  }

  findAll() {
    return `This action returns all sharedPosts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sharedPost`;
  }

  update(id: number, updateSharedPostDto: UpdateSharedPostDto) {
    return `This action updates a #${id} sharedPost`;
  }

  remove(id: number) {
    return `This action removes a #${id} sharedPost`;
  }
}
