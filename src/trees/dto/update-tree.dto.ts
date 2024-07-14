import { PartialType } from '@nestjs/mapped-types';
import { CreateTreeDto } from './create-tree.dto';
import { IsBoolean, IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateTreeDto {
  @IsOptional()
  @IsString()
  tree_name?: string;

  @IsOptional()
  @IsNumber()
  age?: number;

  @IsOptional()
  @IsString()
  genre?: string;

  @IsOptional()
  @IsString()
  ward?: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsBoolean()
  heritage_status?: boolean;

  @IsOptional()
  @IsBoolean()
  indigenous_status?: boolean;

  @IsOptional()
  @IsString()
  health_status?: string;

  @IsOptional()
  @IsNumber()
  girth?: number;

  @IsOptional()
  @IsNumber()
  height?: number;

  @IsOptional()
  @IsNumber()
  canopy?: number;

  @IsOptional()
  @IsString()
  zone?: string;

  @IsOptional()
  @IsString()
  condition?: string;

  @IsOptional()
  @IsString()
  action_needed?: string;
}
