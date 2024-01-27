import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SharedPostsService } from './shared-posts.service';
import { CreateSharedPostDto } from './dto/create-shared-post.dto';
import { UpdateSharedPostDto } from './dto/update-shared-post.dto';

@Controller('shared-posts')
export class SharedPostsController {
  constructor(private readonly sharedPostsService: SharedPostsService) {}

  @Post()
  create(@Body() createSharedPostDto: CreateSharedPostDto) {
    return this.sharedPostsService.create(createSharedPostDto);
  }

  @Get()
  findAll() {
    return this.sharedPostsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sharedPostsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSharedPostDto: UpdateSharedPostDto
  ) {
    return this.sharedPostsService.update(+id, updateSharedPostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sharedPostsService.remove(+id);
  }
}
