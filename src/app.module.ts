import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { typeROMConfig } from './configs/typeorm.config';

// ORM 설정시에는 메인 모듈에 IMPORT해줘야 한다.
@Module({
  imports: [TypeOrmModule.forRoot(typeROMConfig), BoardsModule],
})
export class AppModule {}
