import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [BoardsController],
  providers: [BoardsService, BoardRepository],
  imports: [TypeOrmModule.forFeature([Board]), AuthModule],
})
export class BoardsModule {}
