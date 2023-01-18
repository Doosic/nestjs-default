import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardEntity } from './board.entity';
import { BoardRepository } from './board.repository';

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardRepository) {}

  createBoard(createBoardDto: CreateBoardDto): Promise<BoardEntity> {
    return this.boardRepository.createBoard(createBoardDto);
  }

  getBoardById(id: number): Promise<BoardEntity> {
    return this.boardRepository.getBoardById(id);
  }

  deleteBoard(id: number): Promise<void> {
    this.boardRepository.deleteBoard(id);
  }

  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
