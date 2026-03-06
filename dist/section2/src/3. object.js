// 객체 (object) -> 객체 리터럴 타입 (비원시 타입)
// 객체는 object를 쓰는 것이 아닌 리터럴 타입처럼 작성해야함
let user = {
    id: 1,
    name: "이도서",
};
user.id;
let config = {
    apiKey: "MY API KEY",
};
export {};
// config.apiKey = "hacked"; // readonly가 붙어서 수정이 불가능.
