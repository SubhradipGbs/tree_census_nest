import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { User } from 'src/users/model/user.model';

@Table
export class Role extends Model<Role> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  roleId: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    unique: true,
  })
  roleName: string;

  @Column(DataType.TEXT)
  description: string;

  @HasMany(() => User)
  users: User[];
}
