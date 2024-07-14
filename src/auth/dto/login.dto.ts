import { IsNotEmpty, IsNumberString, IsString } from "class-validator";


export class LoginUserDTO{

    @IsNotEmpty()
    @IsNumberString()
    mobileNo:string;

    @IsNotEmpty()
    @IsString()
    password:string;
}