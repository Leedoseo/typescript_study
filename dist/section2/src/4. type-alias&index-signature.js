let user = {
    id: 1,
    name: "이도서",
    nickname: "leedoseo",
    birth: "1998.02.07",
    bio: "hello",
    location: "화성시",
    extra: "음?",
};
let user2 = {
    id: 1,
    name: "도서",
    nickname: "doseo",
    birth: "1997.02.07",
    bio: "hi",
    location: "서울시",
};
let countryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};
let countryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKimdom: 826,
};
export {};
// let countryNumberCodes: CountryNumberCodes = {} 
// => 이것도 오류가 발생하지 않음.
// 왜? 규칙을 위반하지 않았기 때문
// key: string이고, 값이 number가 아니지 않는 이상 비어있어도 오류는 아님.
/*let countryNumberCodes: CountryNumberCodes = {
    Korea: "ko", -> 오류 발생! 왜? => 인덱스 시그니처의 Value의 타입과 일치하거나 호환이 되어야함
                    즉, value가 number인데, Korea만 따로 string으로 지정하는 것은 호환이 되지 않기 때문에 오류가 발생한다는 것.
}*/ 
