// 객체 (object) -> 객체 리터럴 타입
// 객체는 object를 쓰는 것이 아닌 리터럴 타입처럼 작성해야함
let user: {
  id?: number; // 여기에 ?가 붙으면 있어도 되고 없어도된다. 단, 있다면 number여야 한다라는 뜻 -> 선택적 프로퍼티(optional property)
  name: string;
} = {
  id: 1,
  name: "이도서",
};

user.id;

let config: {
  readonly apiKey: string; // -> readonly가 붙으면 읽기 전용으로 바뀌므로 변경이 불가능함
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked"; // readonly가 붙어서 수정이 불가능.
