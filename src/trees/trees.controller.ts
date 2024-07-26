import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  UseInterceptors,
  UploadedFiles,
  BadRequestException,
} from '@nestjs/common';
import { TreesService } from './trees.service';
import { CreateTreeDto } from './dto/create-tree.dto';
import { Tree } from './model/tree.model';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';

const storage = multer.memoryStorage();
const multerOptions: MulterOptions = {
  storage: storage,
};
// @UseGuards(JwtAuthGuard)
@Controller('trees')
export class TreesController {
  constructor(private readonly treesService: TreesService) {}

  @Post('add-tree')
  @UseInterceptors(FileInterceptor('images', multerOptions))
  create(
    @Body() createTreeDto: CreateTreeDto,
    @UploadedFiles() files: Express.Multer.File[],
  ): Promise<Tree> {
    try {
      if (!files || files.length === 0) {
        throw new BadRequestException('No file found');
      }
      return this.treesService.create(createTreeDto, files);
    } catch (err) {
      console.log(err);
      return err.message;
    }
  }

  @Get('get-all')
  @UseGuards(JwtAuthGuard)
  findAll(): Promise<Tree[]> {
    return this.treesService.findAll();
  }
}
