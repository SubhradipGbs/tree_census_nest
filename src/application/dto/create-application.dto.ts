import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRequestDto {
  @IsNotEmpty()
  @IsString()
  request_type: string;

  @IsNotEmpty()
  @IsString()
  reason: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsString()
  plot_number: string;

  @IsNotEmpty()
  @IsString()
  plot_owner: string;

  @IsNotEmpty()
  @IsNumber()
  no_of_trees: number;

  @IsNotEmpty()
  @IsNumber()
  appliedBy: number;
}
