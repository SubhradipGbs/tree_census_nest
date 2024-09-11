import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/model/user.model';

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
  name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  location: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  plot_number: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  plot_owner: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  reason: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  assignment_status: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  survey_status: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  no_of_trees: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  assignedTo: number;

  @BelongsTo(() => User)
  assignUser: User;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  appliedBy: number;

  @BelongsTo(() => User)
  appliedUser: User;
}
