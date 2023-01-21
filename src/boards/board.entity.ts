import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { BoardStatus } from './board-status.enum';

@Entity('tb_board')
export class BoardEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;
}
