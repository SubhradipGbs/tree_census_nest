import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { TreeImg } from './tree-img.model';

@Table
export class Tree extends Model<Tree> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  tree_id: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  tree_name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  age: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  genre: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  ward: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  location: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  heritage_status: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  indigenous_status: boolean;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  health_status: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  latitude: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  longitude: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  girth: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  height: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  canopy: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  zone: string;

  @Column({
    type: DataType.TEXT,
  })
  condition: string;

  @Column({
    type: DataType.TEXT,
  })
  action_needed: string;

  @HasMany(() => TreeImg)
  images: TreeImg[];
}
