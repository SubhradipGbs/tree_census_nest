import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Requests extends Model<Requests> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  request_id: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  request_type: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  reason: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  status: string;
}
