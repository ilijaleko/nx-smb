import { IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateSharedPostDto {
  @IsString()
  url: string;

  @IsNumber()
  likeCount: number;

  @IsDateString()
  sharedAt: Date;
}
