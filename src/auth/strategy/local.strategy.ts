import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'mobileNo' });
  }

  async validate(mobileNo: string, password: string): Promise<object> {
    try {
      const user = await this.authService.validateLogin({ mobileNo, password });
      if (!user) throw new UnauthorizedException();
      return user;
    } catch (error) {
      throw error;
    }
  }
}
