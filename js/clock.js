const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

getClock();
setInterval(getClock, 1000);


// ## setInterval(function, ms)
//   * 어떤 코드를 일정한 시간 간격을 두고 반복해서 실행하고 싶을 때 사용
//   * 첫번째 인자로 실행할 코드를 담고 있는 함수를 받고, 두번째 인자로 반복 주기를 밀리초(ms) 단위
// ## setTimeout(function, ms)
//   * 함수는 일정시간이 지난 후 인자로 받은 함수를 한번 실행할 때 사용
//   * 첫번째 인자로 실행할 코드를 담고 있는 함수를 받고, 두번째 인자로 반복 주기를 밀리초(ms) 단위
// ## padStart(targetLength, padString)
//   * 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환
//   * 채워넣기는 문자열의 시작(좌측)부터 적용
//   * 첫번째 인자는 목표 문자열 길이, 두번째 인자는 현재 문자열에 채워넣을 다른 문자열
//   * 만약 현재 문자열 길이보다 작다면 그대로 반환
// ## padEnd(targetLength, padString)
//   * 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환
//   * 채워넣기는 문자열의 끝(우측)부터 적용
//   * 첫번째 인자는 목표 문자열 길이, 두번째 인자는 현재 문자열에 채워넣을 다른 문자열
//   * 만약 현재 문자열 길이보다 작다면 그대로 반환