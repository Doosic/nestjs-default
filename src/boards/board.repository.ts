import { BoardEntity } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './board-status.enum';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common/exceptions';

// 0.2버전대와 동일하게 사용시 아래 링크를 참고하여 커스텀 데코레이터를 만들어 사용해야한다.
// https://www.inflearn.com/questions/688093/typeorm-0-3-x-%EB%B2%84%EC%A0%84-%EC%98%A4%EB%A5%98
export class BoardRepository {
  constructor(
    @InjectRepository(BoardEntity)
    private boardRepository: Repository<BoardEntity>,
  ) {}

  async createBoard(createBoardDto: CreateBoardDto): Promise<BoardEntity> {
    const { title, description } = createBoardDto;
    const board = this.boardRepository.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });

    await this.boardRepository.save(board);
    return board;
  }

  async getBoardById(id: number): Promise<BoardEntity> {
    const found = await this.boardRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return found;
  }

  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
  }
}
