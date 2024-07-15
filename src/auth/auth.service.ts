import { Injectable } from '@nestjs/common';
import { LoginUserDTO } from './dto/login.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}
  async validateLogin(body: LoginUserDTO): Promise<object> {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await this.usersService.validateUser(body);
        resolve({});
      } catch (error) {
        reject(error);
      }
    });
  }
}
