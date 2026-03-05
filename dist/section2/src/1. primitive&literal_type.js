// 원시타입 (Primitive Type) => 하나의 값만 저장하는 타입
// => number, string, boolean, null, undefined
// 1. number
let num1 = 123; // : number -> 타입 어노테이션 / 변수의 타입을 정의하는 방식
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity;
let num6 = -Infinity;
let num7 = NaN;
// 2. String
let str1 = "hello";
let str2 = `hello`;
let str3 = "hello ${num1}";
// 3. boolean
let bool1 = true;
let bool2 = false;
// 4. null
let null1 = null;
// 5. undefined
let unde1 = undefined;
// 6. 리터럴 타입
// -> 리터럴 = 값
// 다른 값을 넣으면 오류 발생
let numB = 10;
// numB = 13; 오류 발생!
// number 타입에 null 타입을 넣을 때 tsconfig.json 에서 strictNullChecks를 false로 설정해야함
let numA = null;
export {};
