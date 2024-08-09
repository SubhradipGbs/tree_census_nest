import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTreeDto } from './dto/create-tree.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Tree } from './model/tree.model';
import { TreeImg } from './model/tree-img.model';
import { FileStorageService } from 'src/file-storage/file-storage.service';

@Injectable()
export class TreesService {
  constructor(
    @InjectModel(Tree)
    private readonly treeModel: typeof Tree,
    @InjectModel(TreeImg)
    private treeImgModel: typeof TreeImg,
    private fileStorageService: FileStorageService,
  ) {}

  async create(
    createTreeDto: CreateTreeDto,
    files: Express.Multer.File[],
  ): Promise<Tree> {
    try {
      const tree = await this.treeModel.create(createTreeDto);
      const uploadDir = 'uploads/';
      const savedFiles = await this.fileStorageService.saveImgFiles(files);
      const imageRecords = savedFiles.map((file) => ({
        filename: file.filename,
        dir: `/${uploadDir}${file.filename}`,
        treeId: tree.tree_id,
      }));
      await this.treeImgModel.bulkCreate(imageRecords);
      return tree;
    } catch (err) {
      console.log(err);
      throw new BadRequestException('error creating tree');
    }
  }

  async findAll(): Promise<Tree[]> {
    return await this.treeModel.findAll();
  }
}
