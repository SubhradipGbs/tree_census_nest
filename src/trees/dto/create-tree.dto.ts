import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';

export class CreateTreeDto {
  @IsNotEmpty({ message: 'tree name is required' })
  @IsString({ message: 'tree name must be string' })
  tree_name: string;

  @IsNotEmpty({ message: 'age is required' })
  @IsString()
  @Matches(/^(?:[1-9][0-9]?|1[01][0-9]|150)$/,{message:'age must be a number'})
  age: string;

  @IsNotEmpty({ message: 'genre is required' })
  @IsString()
  genre: string;

  @IsNotEmpty({ message: 'ward is required' })
  @IsString()
  ward: string;

  @IsNotEmpty({ message: 'location is required' })
  @IsString()
  location: string;


  @IsNotEmpty({ message: 'latitude is required' })
  @IsString()
  latitude: string;

  @IsNotEmpty({ message: 'longitude is required' })
  @IsString()
  longitude: string;

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
  @IsString()
  @Matches(/^\d+(\.\d{1,2})?$/)
  girth: string;

  @IsNotEmpty({ message: 'height is required' })
  @IsString()
  @Matches(/^\d+(\.\d{1,2})?$/,{message:'height must be number'})
  height: string;

  @IsNotEmpty({ message: 'canopy is required' })
  @IsString()
  @Matches(/^\d+(\.\d{1,2})?$/,{message:'canopy must be number'})
  canopy: string;

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
