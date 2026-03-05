// 열거형 타입 Enum (Enumerable Type)
// 여러 가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// JS에는 없고 TS에만 있는 타입

/* const user1 = {
  name: "이도서",
  role: 0, // 0은 관리자
};
const user2 = {
  name: "도서",
  role: 1, // 1은 일반 유저
};
const user3 = {
  name: "김도서",
  role: 2, // 2는 게스트
}; */

enum Role {
  // 숫자형 이넘
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

enum Language {
  // 문자열 이넘
  korean = "ko",
  english = "eng",
}

const user1 = {
  name: "이도서",
  role: Role.ADMIN,
  language: Language.korean,
};
const user2 = {
  name: "도서",
  role: Role.USER,
  language: Language.english,
};
const user3 = {
  name: "김도서",
  role: Role.GUEST,
  language: Language.korean,
};
