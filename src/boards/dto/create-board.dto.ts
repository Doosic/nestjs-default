// 클래스는 인터페이스와 다르게 런타임에서 작동하기 때문에 파이프와 같은 기능을 이용할 때 더 유용하다.(validation에 유리)
export class CreateBoardDto {
  title: string;
  description: string;
}
