import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardEntity } from './board.entity';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { BoardStatus } from './board-status.enum';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('boards')
@UseGuards(AuthGuard())
export class BoardsController {
  // 접근제한자 선언 전 주입방식
  // boardsService: BoardsService;
  // constructor(boardService: BoardsSerivce){this.boardsService = boardsService;}

  // 접근 제한자(public, protected, private)를 생성자(contstructor) 파라미터에 선언하면 접근
  // 제한자가 사용된 생성자 파라미터는 암묵적으로 클래스 프로퍼티로 선언된다.

  // private 사용시 boardService 프로퍼티는 BoardsController 클래스 내부에서만 사용이 가능하다.
  constructor(private boardsService: BoardsService) {}

  @Get()
  getAllBoard(): Promise<BoardEntity[]> {
    return this.boardsService.getAllBoard();
  }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<BoardEntity> {
    return this.boardsService.getBoardById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() CreateBoardDto: CreateBoardDto): Promise<BoardEntity> {
    return this.boardsService.createBoard(CreateBoardDto);
  }

  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.boardsService.deleteBoard(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ): Promise<BoardEntity> {
    return this.boardsService.updateBoardStatus(id, status);
  }
}
