import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { UserEntity } from './user.entity';

// 테스트 해볼것 imports 에 UserEntity가 빠져도되는지 해봐야함

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserRepository],
  imports: [TypeOrmModule.forFeature([UserEntity])],
})
export class AuthModule {}
