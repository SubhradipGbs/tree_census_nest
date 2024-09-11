import {
  Controller,
  Post,
  Body,
  HttpStatus,
  Res,
  Get,
  Req,
} from '@nestjs/common';
import { ApplicationService } from './application.service';
import { CreateRequestDto } from './dto/create-application.dto';
import { Request, Response } from 'express';

@Controller('application')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @Post('add-new')
  async create(
    @Body() createRequestDto: CreateRequestDto,
    @Res() res: Response,
  ): Promise<Response> {
    const tree = await this.applicationService.create(createRequestDto);

    return res.status(HttpStatus.CREATED).json({
      statusCode: 1,
      message: 'Applied successfully',
      data: tree,
    });
  }

  @Get('get-all')
  async findAll(@Res() res: Response) {
    try {
      const applications = await this.applicationService.findAll();
      return res.status(HttpStatus.OK).json({
        statusCode: 1,
        message: 'Data found',
        data: applications,
      });
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Failed to retrieve trees',
      });
    }
  }

  @Post('get-by-user')
  async findByUser(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const { userId } = req.body;
    try {
      const applications = await this.applicationService.findByUser(userId);
      return res.status(HttpStatus.OK).json({
        statusCode: 1,
        message: 'Data found',
        data: applications,
      });
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Failed to retrieve trees',
      });
    }
  }
}
