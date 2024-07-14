import { Injectable } from '@nestjs/common';
import { LoginUserDTO } from './dto/login.dto';

@Injectable()
export class AuthService {
  async validateLogin(body: LoginUserDTO): Promise<object> {
    return new Promise(async (resolve, reject) => {
      try {
        // const user = await this.usersService.validateUser(body, envType);
        resolve({});
      } catch (error) {
        reject(error);
      }
    });
  }
}
