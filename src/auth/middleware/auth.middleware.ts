import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

export interface RequestTokenUser extends Request {
  user: any;
}

@Injectable()
export class verifyUserToken implements NestMiddleware {
  //   constructor() {}
  use(req: RequestTokenUser, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      throw new UnauthorizedException('Auhtorization header not found');
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token not found');
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = { message: 'hello' };
      next();
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
