import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { UserRepository } from './user.repository';
import { UserEntity } from './user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userRepository: UserRepository) {
    super({
      secretOrKey: 'Secret1234',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  // 토큰이 유효한지 확인될때 실행되는 메소드
  async validate(payload) {
    const { username } = payload;
    const user: UserEntity = await this.userRepository.findUser(username);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
