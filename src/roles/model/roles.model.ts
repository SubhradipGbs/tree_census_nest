import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Role extends Model<Role> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  role_id: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  role_name: string;

  @Column(DataType.TEXT)
  description: string;
}
