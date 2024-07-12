import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dialect } from 'sequelize/types';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { TreesModule } from './trees/trees.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        dialect: configService.get<string>('database.dialect') as Dialect,
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.database'),
        autoLoadModels: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    // RolesModule,
    UsersModule,
    TreesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
