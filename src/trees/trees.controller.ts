import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TreesService } from './trees.service';
import { CreateTreeDto } from './dto/create-tree.dto';
import { UpdateTreeDto } from './dto/update-tree.dto';
import { Tree } from './model/tree.model';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('trees')
export class TreesController {
  constructor(private readonly treesService: TreesService) {}

  @Post('add-tree')
  create(@Body() createTreeDto: CreateTreeDto): Promise<Tree> {
    return this.treesService.create(createTreeDto);
  }

  @Get('get-all')
  findAll(): Promise<Tree[]> {
    return this.treesService.findAll();
  }
}
