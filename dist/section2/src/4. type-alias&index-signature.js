// 타입 별칭 (type-alias)
let user = {
    id: 1,
    name: "이도서",
    nickname: "leedoseo",
    birth: "1998.02.07",
    bio: "hello",
    location: "화성시",
    extra: "음?"
};
let user2 = {
    id: 1,
    name: "도서",
    nickname: "doseo",
    birth: "1997.02.07",
    bio: "hi",
    location: "서울시",
};
export {};
// => 각 user, user2에 있어야할
// id: number;
// name: string;
// nickname: string;
// birth: string;
// bio: string;
// location: string;
// 타입에 관련된 중복 코드를 User에 정의하여 중복을 없앰
