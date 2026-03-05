// 원시타입 (Primitive Type) => 하나의 값만 저장하는 타입
// => number, string, boolean, null, undefined

// 1. number
let num1: number = 123; // : number -> 타입 어노테이션 / 변수의 타입을 정의하는 방식
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// 2. String
let str1: string = "hello";
let str2: string = `hello`;
let str3: string = "hello ${num1}";

// 3. boolean
let bool1: boolean = true;
let bool2: boolean = false;

// 4. null
let null1: null = null;

// 5. undefined
let unde1: undefined = undefined;

// 6. 리터럴 타입
// -> 리터럴 = 값
// 다른 값을 넣으면 오류 발생
let numB: 10 = 10;
// numB = 13; 오류 발생!

// number 타입에 null 타입을 넣을 때 tsconfig.json 에서 strictNullChecks를 false로 설정해야함
let numA: number = null;