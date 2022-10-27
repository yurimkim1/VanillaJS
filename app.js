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
// typeof => 타입 확인
// parseInt => 문자열(숫자)에서 숫자로 타입 변환

console.log(isNaN(age1));
// 하나의 인자를 주면 number인지 아닌지 가르쳐줌

// not a number인지 알려준다.
if(isNaN(age1) || age1 < 0){
    console.log("Please write are real positive number");
} else if (age1 < 18){
    console.log("You are too young");
} else if (age1 >= 18 && age1 <= 50){
    console.log("You can drink");
} else if (age1 > 50 && age1 <= 80){
    console.log("You Should exercise");
}  else if (age1 > 80){
    console.log("You can do whatever you want.");
} else if (age1 !== 100){
    console.log("wow you are wise");
}

// AND 연산자
// OR 연산자
