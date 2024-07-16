import {
  BeforeCreate,
  BeforeUpdate,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Role } from 'src/roles/model/roles.model';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  user_id: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  aadhaarNo: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  mobileNo: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.TEXT,
  })
  image: string;

  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
    defaultValue: 3,
  })
  roleId: number;

  @BelongsTo(() => Role)
  role: Role;

  @BeforeCreate
  @BeforeUpdate
  static async validateRoleId(instance: User) {
    const role = await Role.findByPk(instance.roleId);
    if (!role) {
      throw new Error(
        `roleId ${instance.roleId} does not exist in the Role table.`,
      );
    }
  }
}
