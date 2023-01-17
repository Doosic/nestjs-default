import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  // 접근제한자 선언 전 주입방식
  // boardsService: BoardsService;
  // constructor(boardService: BoardsSerivce){this.boardsService = boardsService;}

  // 접근 제한자(public, protected, private)를 생성자(contstructor) 파라미터에 선언하면 접근
  // 제한자가 사용된 생성자 파라미터는 암묵적으로 클래스 프로퍼티로 선언된다.

  // private 사용시 boardService 프로퍼티는 BoardsController 클래스 내부에서만 사용이 가능하다.
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  createBoard(@Body() CreateBoardDto: CreateBoardDto): Board {
    return this.boardsService.createBoard(CreateBoardDto);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    return this.boardsService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id: string): void {
    this.boardsService.deleteBoard(id);
  }
}
