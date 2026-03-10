// 타입은 집합임
// 여러 가지의 숫자들을 뫃아놓은 집합을 넘버타입이라고 부름 => 동일한 속성과 특징들을 갖는 값들을 모아둔 집합이라고 이해하면 됨.
let numberType: number = 1;
let numberType1: number = -20;
let numberType2: number = Infinity;
let numberType3: number = 0.123;

// 그럼 number Literal Type은?
// 20이라는 값은 숫자니까 number Type의 부분 집합이라고 보면됨. => number Type임.
let numberLiteralType: 20 = 20;
// 결론은 number Type은 부모타입, number Literal Type은 자식타입 이라고 생각하면 됨.

// 타입 호환성: 어떤 타입을 다른 타입으로 취급해도 괜찮은지 판단하는 것
// number 타입은 number Literal type으로 취급하면 안됨.
// number Literal type 타입은 number type으로 취급해도 됨.
// 모든 정사각형은 직사각형으로 취급해도 되지만 모든 직사각형을 정사각형으로 취급하는건 안되는 것과 같음.

let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // 이것은 가능함. num1은 number타입이고 num2는 10인 리터럴 타입이기 때문에 가능 => 10은 number 타입이 될 수 있음.
// num2 = num1; // 이것은 불가능함. num2는 리터럴 타입이고 num1은 number 타입이기 때문에 불가능 => number 타입은 리터럴 타입이 될 수 없음.