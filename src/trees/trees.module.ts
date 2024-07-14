import { Module } from '@nestjs/common';
import { TreesService } from './trees.service';
import { TreesController } from './trees.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tree } from './model/tree.model';

@Module({
  imports: [SequelizeModule.forFeature([Tree])],
  controllers: [TreesController],
  providers: [TreesService],
})
export class TreesModule {}
