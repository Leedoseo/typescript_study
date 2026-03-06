// any
// 특정 변수의 타입을 확실히 모를 때 사용할 수 있는 타입
let anyVar: any = 10; // 원래 10이 들어가서 number라는 타입으로 추론됐지만 :any로 타입을 지정해서 다른 모든 타입을 받을 수 있음
anyVar = "hi";
anyVar = true;

let num: number = 10;
num = anyVar; // 이건 가능
// 단, any 타입을 쓰면 TypeScript가 가지는 이점을 모두 포기하는 것과 같음. -> 최대한 사용 X

// unknown
// 모든 타입을 저장할 수 있지만, 다른 타입에 unknown 타입을 넣을 순 없음
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar 이건 안됨.

if (typeof unknownVar === "number") {
  // unknownVar가 넘버 타입임을 확실히 밝혀주었을 때는 unknown타입의 변수를 number 타입으로 정제해서 사용할 수는 있음
  // => 타입 정제라고 함.
  num = unknownVar;
}
// any타입보단 unknown타입을 좀 더 사용함.
// `any`는 타입 검사를 비활성화하지만, `unknown`은 더 안전해서 다른 타입에 할당하거나 사용하려면 명시적인 타입 확인 과정이 필요.
