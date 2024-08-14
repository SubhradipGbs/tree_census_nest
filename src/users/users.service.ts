import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './model/user.model';
import * as bcrypt from 'bcryptjs';
import { LoginUserDTO } from 'src/auth/dto/login.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<object> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    try {
      const user = await this.userModel.create({
        ...createUserDto,
        password: hashedPassword,
      });
      const { password, ...result } = user.dataValues;
      return result;
    } catch (error) {
      throw new BadRequestException({ message: error.message });
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

  async validateUser(body: LoginUserDTO): Promise<User | null> {
    return new Promise(async (resolve, reject) => {
      const { mobileNo, password } = body;
      console.log(body);
      try {
        const user = await this.userModel.findOne({ where: { mobileNo } });
        if (!user)
          throw new HttpException(
            'Combination of Email & Password missmatch.',
            HttpStatus.BAD_REQUEST,
          );
        const isValidUser = await bcrypt.compare(password, user.password);
        if (!isValidUser)
          throw new HttpException(
            'Combination of Email & Password missmatch.',
            HttpStatus.BAD_REQUEST,
          );
        resolve(user);
      } catch (error) {
        reject(error);
      }
    });
  }

  async getDetails(mobile: string): Promise<User> {
    try {
      console.log(mobile);
      const user = await this.userModel.findOne({
        where: { mobileNo: mobile },
        attributes: {
          exclude: ['password'],
        },
      });
      if (!user) {
        throw new NotFoundException('mobile no not registered');
      }
      return user;
    } catch {
      throw new InternalServerErrorException('Error');
    }
  }
}
