import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Tree } from './tree.model';

@Table
export class TreeImg extends Model<TreeImg> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.STRING,
  })
  filename: string;

  @Column({
    type: DataType.STRING,
  })
  dir: string;

  @ForeignKey(() => Tree)
  @Column
  treeId: number;
}
