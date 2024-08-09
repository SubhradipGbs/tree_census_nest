import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  UseInterceptors,
  UploadedFiles,
  BadRequestException,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { TreesService } from './trees.service';
import { CreateTreeDto } from './dto/create-tree.dto';
import { Tree } from './model/tree.model';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { Response } from 'express';

const storage = multer.memoryStorage();
const multerOptions: MulterOptions = {
  storage: storage,
};
// @UseGuards(JwtAuthGuard)
@Controller('trees')
export class TreesController {
  constructor(private readonly treesService: TreesService) {}

  @Post('add-tree')
  @UseInterceptors(FilesInterceptor('images', 10, multerOptions))
  async create(
    @Body() createTreeDto: CreateTreeDto,
    @UploadedFiles() files: Express.Multer.File[],
    @Res() res: Response,
  ): Promise<Response> {
    try {
      if (!files || files.length === 0) {
        throw new BadRequestException('No file found');
      }
      const tree = await this.treesService.create(createTreeDto, files);
      return res.status(HttpStatus.CREATED).json({
        statusCode: 1,
        message: 'Tree created successfully',
        data: tree,
      });
    } catch (err) {
      console.error(err);
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 0,
        message: err.message || 'Internal server error',
      });
    }
  }

  @Get('get-all')
  @UseGuards(JwtAuthGuard)
  async findAll(@Res() res: Response): Promise<Response> {
    try {
      const trees = await this.treesService.findAll();
      return res.status(HttpStatus.OK).json({
        statusCode: 1,
        message: 'data found',
        data: trees,
      });
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Failed to retrieve trees',
      });
    }
  }
}
