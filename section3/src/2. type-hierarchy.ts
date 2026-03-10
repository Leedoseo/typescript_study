// 부모 타입을 자식 타입으로 취급하는 것을 다운캐스트라고 함. // 대부분의 상황에 비허용
// 자식 타입을 부모 타입으로 취급하는 것을 업캐스트라고 함. // 모든 상황에 허용

// unknown 타입: 모든 타입의 전체 집합 => 가장 상위 부모타입
function unknownExam() {
  let a: unknown = 1; // 업캐스팅 됨.
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // let num: number = unknownVar; // 다운캐스팅 안됨.
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

// never 타입 : 모든 타입의 부분 집합 => 가장 하위 자식타입
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc(); // 업캐스팅
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // let never1: never = 10; // 다운캐스팅 안됨.
  // let never2: never = "string";
  // let never3: never = true;
}

// void 타입: undefined 타입의 부모 타입임.
function voidExam() {
    function voidFunc(): void {
        console.log("hi");
    }

    let voidVar: void = undefined; // 업캐스팅
}

// any 타입: 치트키라고 생각하면됨 = 모든 타입의 부모 타입이 될 수도 있고 자식 타입이 될 수도 있음. never 제외.
function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar; // 다운캐스팅(any만 가능)
    undefinedVar = anyVar; // 다운캐스팅(any만 가능)
    // neverVar = anyVar; // never타입은 공집합이라고 생각하면됨. => 다운캐스팅 안됨.
}