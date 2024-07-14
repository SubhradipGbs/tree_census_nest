import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateTreeDto {
  @IsNotEmpty({ message: 'tree name is required' })
  @IsString({ message: 'tree name must be string' })
  tree_name: string;

  @IsNotEmpty({ message: 'age is required' })
  @IsNumber()
  age: number;

  @IsNotEmpty({ message: 'genre is required' })
  @IsString()
  genre: string;

  @IsNotEmpty({ message: 'ward is required' })
  @IsString()
  ward: string;

  @IsNotEmpty({ message: 'location is required' })
  @IsString()
  location: string;

  @IsOptional()
  @IsBoolean()
  heritage_status?: boolean;

  @IsOptional()
  @IsBoolean()
  indigenous_status?: boolean;

  @IsNotEmpty({ message: 'health status required' })
  @IsString()
  health_status: string;

  @IsNotEmpty({ message: 'girth is required' })
  @IsNumber({ maxDecimalPlaces: 2 })
  girth: number;

  @IsNotEmpty({ message: 'height is required' })
  @IsNumber({ maxDecimalPlaces: 2 })
  height: number;

  @IsNotEmpty({ message: 'canopy is required' })
  @IsNumber({ maxDecimalPlaces: 2 })
  canopy: number;

  @IsNotEmpty({ message: 'zone is required' })
  @IsString()
  zone: string;

  @IsOptional()
  @IsString()
  condition?: string;

  @IsOptional()
  @IsString()
  action_needed?: string;
}
