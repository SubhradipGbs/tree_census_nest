import { Module } from '@nestjs/common';
import { TreesService } from './trees.service';
import { TreesController } from './trees.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tree } from './model/tree.model';
import { TreeImg } from './model/tree-img.model';
import { FileStorageModule } from 'src/file-storage/file-storage.module';

@Module({
  imports: [SequelizeModule.forFeature([Tree, TreeImg]), FileStorageModule],
  controllers: [TreesController],
  providers: [TreesService],
})
export class TreesModule {}
