import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

    @Post('/login')
    @UseGuards(AuthGuard('jwt'))
    login(){
        return "login Success"
    }
}
