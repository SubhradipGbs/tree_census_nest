import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './model/roles.model';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Role)
    private readonly roleModel: typeof Role,
  ) {}

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    try {
      return this.roleModel.create(createRoleDto);
    } catch (error) {
      throw new BadRequestException('Role creation failed');
    }
  }

  async update(id: number, updateRoleDto: UpdateRoleDto): Promise<Role> {
    const item = await this.roleModel.findByPk(id);
    await item.update(updateRoleDto);
    return item;
  }

  async delete(id: number): Promise<void> {
    const item = await this.roleModel.findOne({ where: { roleId: id } });
    await item.destroy();
  }

  async findAll(): Promise<Role[]> {
    return this.roleModel.findAll();
  }
}
