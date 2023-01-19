import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardEntity } from './board.entity';
import { BoardRepository } from './board.repository';
import { BoardStatus } from './board-status.enum';

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardRepository) {}

  getAllBoard(): Promise<BoardEntity[]> {
    return this.boardRepository.getAllBoards();
  }

  createBoard(createBoardDto: CreateBoardDto): Promise<BoardEntity> {
    return this.boardRepository.createBoard(createBoardDto);
  }

  getBoardById(id: number): Promise<BoardEntity> {
    return this.boardRepository.getBoardById(id);
  }

  deleteBoard(id: number): Promise<void> {
    return this.boardRepository.deleteBoard(id);
  }

  updateBoardStatus(id: number, status: BoardStatus): Promise<BoardEntity> {
    return this.boardRepository.updateBoardStatus(id, status);
  }
}
