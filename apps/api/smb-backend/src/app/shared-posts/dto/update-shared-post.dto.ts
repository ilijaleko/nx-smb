import { PartialType } from '@nestjs/mapped-types';
import { CreateSharedPostDto } from './create-shared-post.dto';
import { IsString } from 'class-validator';

export class UpdateSharedPostDto extends PartialType(CreateSharedPostDto) {
  @IsString()
  id: string;
}
