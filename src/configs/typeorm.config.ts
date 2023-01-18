import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// ORM 설정시에는 메인 모듈에 IMPORT해줘야 한다. EX) app.module.ts
export const typeORMConfig: TypeOrmModuleOptions = {
  // Database type
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'board-app',
  entities: [__dirname + '/../**/*.entity{.js,.ts}'],

  // * 주의사항
  // synchronize: true값을 주면 애플리케이션을 다시 실행할 때 엔티티안에서 수정된 컬럼의 길이 타입 변경값들을 해당 테이블을 Drop한 후 다시 생성해줍니다.
  synchronize: true,
};
