import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Requests } from './model/application.model';

@Injectable()
export class ApplicationService {
  constructor(
    @InjectModel(Requests)
    private readonly requestModel: typeof Requests,
  ) {}
}
