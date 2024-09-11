import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Requests } from './model/application.model';
import { CreateRequestDto } from './dto/create-application.dto';

@Injectable()
export class ApplicationService {
  constructor(
    @InjectModel(Requests)
    private readonly requestModel: typeof Requests,
  ) {}

  async create(createRequestDto: CreateRequestDto): Promise<Requests> {
    try {
      const application = await this.requestModel.create(createRequestDto);
      return application;
    } catch (err) {
      console.log(err);
      throw new BadRequestException('error creating tree');
    }
  }

  async findAll(): Promise<Requests[]> {
    return await this.requestModel.findAll();
  }

  async findByUser(userId: number): Promise<Requests[]> {
    return await this.requestModel.findAll({
      where: { appliedBy: userId },
      // include: [
      //   {
      //     model: ,
      //     attributes: ['roleName'],
      //     as: 'role',
      //   },
      // ],
    });
  }
}
