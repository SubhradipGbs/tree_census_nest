import { Module } from '@nestjs/common';
import { ApplicationService } from './application.service';
import { ApplicationController } from './application.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Requests } from './model/application.model';

@Module({
  imports: [SequelizeModule.forFeature([Requests])],
  controllers: [ApplicationController],
  providers: [ApplicationService],
})
export class ApplicationModule {}
