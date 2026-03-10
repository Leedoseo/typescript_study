// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "doseo"];
let boolArr: Array<boolean> = [true, false]; // 제네릭 문법: <다른 타입 지정>

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"]; // 유니온 타입: 여러 타입 중 하나가 될 수 있는 타입

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// 튜플 -> TypeScript에서만 제공되는 타입
// -> 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [3, "hello", true];

// 튜플 사용하는 상황
// 유저 이름, 아이디
const users: [string, number][] = [
  ["도서", 1],
  ["이도서", 2],
  ["김도서", 3],
  ["박도서", 4],
  // [5, "최도서"] -> string과 number의 위치가 틀림 -> 오류 발생
  // 순서를 지키는게 중요할 때 튜플을 사용해서 값을 잘못 넣는 것을 방지!
];


let doubleArr2: (number | string)[][] = [
	[1, 2, 3],
	["hi", 4],
];