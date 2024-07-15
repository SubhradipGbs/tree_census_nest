import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTreeDto } from './dto/create-tree.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Tree } from './model/tree.model';

@Injectable()
export class TreesService {
  constructor(
    @InjectModel(Tree)
    private readonly treeModel: typeof Tree,
  ) {}

  async create(createTreeDto: CreateTreeDto): Promise<Tree> {
    try {
      return await this.treeModel.create(createTreeDto);
    } catch (err) {
      throw new BadRequestException('error creating tree');
    }
  }

  async findAll(): Promise<Tree[]> {
    return await this.treeModel.findAll();
  }
}
