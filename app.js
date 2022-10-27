// const , let 차이점
// : 값을 재할당한다면 let, 재할당을 안한다면 const
// 강사는 쓰지 말라고 했지만 상황에 따라 달라질수 있다.

// ## Arrays
// arrays 목적
// 하나의 variable 안에 데이터의 list를 가지는 것
// array 규칙
// 1. 시작과 끝에 대괄호를 사용해야한다.
// 2. array안 각각의 항목은 쉼표로 분리되어야 한다.
// 3. 무슨 데이터타입이든 넣을수 있다. (number, string, bool, null, ...)

// array에서 원하는 아이템 받아오기
daysOfWeek = ["mon" , "tue" , "web" , "thu" , "fri" , "sat"];
console.log(daysOfWeek[5]);

// array 안에 요일 더 추가하기
daysOfWeek.push("sun");
console.log(daysOfWeek);


// ## Objects
// 규칙
// array 차이점은 중괄호를 사용한다.
// c#의 struct와 비슷하다.
const player = {
    name: "nico",
    points: 10,
    fat: true,
}

console.log(player);
player.fat = false;
console.log(player);

// const는 수정할 수 없지않나?
// const 전체를 하나의 값으로서 업데이트할 때 발생
// objects 안에 있는 property 값 수정 가능
// player = false; // 에러발생

// ## Functions
// 코드를 캡슐화해서 실행을 여러번 할 수 있다.
function sayHello(nameOfPerson, age){
    console.log("Hello my name is" + nameOfPerson + "and I am" + age);
}

sayHello("Kim", 20);
sayHello("Lee", 30);


const calculator = {
    add: function(a, b) {
        console.log(a, b);
    },
};

calculator.add(5,1);

//## Return
const age = 30;
function calculatorKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculatorKrAge(age);
console.log(krAge);

// ## conditionals
const age1 = prompt("How old are you?");
console.log(typeof age1, typeof parseInt(age1)); 
// typeof => 데이터타입 확인 문법
// parseInt 문자열(숫자) -> 숫자 변환


