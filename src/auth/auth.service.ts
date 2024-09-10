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
        const { password, ...result } = user;
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  async login(user: any): Promise<object> {
    return new Promise(async (resolve, reject) => {
      const {user_id,mobileNo,roleId}=user.dataValues;
      try {
        resolve({ token: this.jwtService.sign(user),user_id,mobileNo,roleId});
      } catch (err) {
        reject(err);
      }
    });
  }
}
