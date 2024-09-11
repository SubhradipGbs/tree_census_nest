import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'name is required' })
  @IsString({ message: 'name must be a string' })
  readonly name: string;

  @IsNotEmpty({ message: 'aadhaar number is required' })
  @IsString()
  @Matches(/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/, {
    message: 'Invalid aadhar number',
  })
  readonly aadhaarNo: string;

  @IsNotEmpty({ message: 'mobileNo required' })
  @IsString()
  @Matches(/^[6-9]\d{9}$/, { message: 'Invalid mobileNo' })
  readonly mobileNo: string;

  @IsNotEmpty({ message: 'password is required' })
  @IsString()
  @MinLength(6, { message: 'password should contain atleast 6 characters' })
  @Matches(/[A-Z]/, { message: 'password should contain uppercase character' })
  @Matches(/[a-z]/, { message: 'password should contain lowercase character' })
  @Matches(/\d/, { message: 'password should contain number' })
  @Matches(/[\W_]/, { message: 'password should contain special character' })
  readonly password: string;

  @IsOptional()
  @IsString()
  readonly image?: string;

  @IsOptional()
  @IsNumber()
  roleId:number
}
