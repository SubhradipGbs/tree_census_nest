import { Injectable } from '@nestjs/common';
import { LoginUserDTO } from './dto/login.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateLogin(body: LoginUserDTO): Promise<object> {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await this.usersService.validateUser(body);
        // const { password, ...result } = user;
        resolve(user);
      } catch (error) {
        reject(error);
      }
    });
  }

  async login(user: any): Promise<object> {
    return new Promise(async (resolve, reject) => {
      try {
        resolve({ token: this.jwtService.sign(user) });
      } catch (err) {
        reject(err);
      }
    });
  }
}
