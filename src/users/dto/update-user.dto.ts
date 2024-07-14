import { IsOptional, IsString, Matches, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString({ message: 'name must be a string' })
  readonly name?: string;

  @IsOptional()
  @IsString()
  @Matches(/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/, {
    message: 'Invalid aadhar number',
  })
  readonly aadhaarNo?: string;

  @IsOptional()
  @IsString()
  @Matches(/^[6-9]\d{9}$/, { message: 'Invalid mobileNo' })
  readonly mobileNo?: string;

  @IsOptional()
  @IsString()
  @MinLength(6, { message: 'password should contain atleast 6 characters' })
  @Matches(/[A-Z]/, { message: 'password should contain uppercase character' })
  @Matches(/[a-z]/, { message: 'password should contain lowercase character' })
  @Matches(/\d/, { message: 'password should contain number' })
  @Matches(/[\W_]/, { message: 'password should contain special character' })
  readonly password?: string;

  @IsOptional()
  @IsString()
  readonly image?: string;
}
