import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './model/user.model';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    try {
      return await this.userModel.create({
        ...createUserDto,
        password: hashedPassword,
      });
    } catch (error) {
      throw new BadRequestException('User creation failed');
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    try {
      const user = await this.userModel.findByPk(id);
      if (!user) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }

      const { password, ...updatedUserData } = updateUserDto;
      await user.update(updatedUserData);
      return user;
    } catch (error) {
      console.error(error);
      throw new BadRequestException(`Error updating user: ${error.message}`);
    }
  }

  async delete(id: number): Promise<void> {
    const user = await this.userModel.findByPk(id);
    await user.destroy();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }
}
