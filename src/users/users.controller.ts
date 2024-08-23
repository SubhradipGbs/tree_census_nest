import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './model/user.model';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('add-user')
  create(@Body() createuserDto: CreateUserDto): Promise<object> {
    return this.usersService.create(createuserDto);
  }

  @Get('get-all')
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post('update/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.update(id, updateUserDto);
  }

  @Post('user-details')
  getDetails(@Request() req): Promise<User> {
    const { mobileNo } = req.body;
    // const tokenUser = req.user;
    console.log(req);
    return this.usersService.getDetails(mobileNo);
  }
}
