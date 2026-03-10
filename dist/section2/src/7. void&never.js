// void
// => 공허 => 아무 것도 없음을 의미하는 타입
// return 문을 사용하고 싶지 않은 함수일 때 void타입 사용
function func1() {
    return "hello";
}
function func2() {
    // func2라는 함수는 아무런 값도 반환하고 있지 않음 (return X) => void타입
    console.log("hello");
}
// let a: void;
// a = 1;
// a = "hello";
// a = {};
// a = null; // strictNullChecks: false로 설정하면 null도 가능
// a = undefined; // 일반적으론 undefined만 가능
// never
// => 존재하지 않는 => 불가능한 타입 => 반환을 할 수가 없음. 즉, 반환하는 것 자체가 불가능할 때 never 타입 사용
function func3() {
    while (true) { }
}
function func4() {
    throw new Error();
}
export {};
