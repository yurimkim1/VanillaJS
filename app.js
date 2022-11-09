const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){ // 방금 일어난 event에 대한 정보를 담는 object는 onLoginSubmit을 위한 eventlistener 함수의 첫번째 인자로 주어짐
    event.preventDefault();  // 기본동작을 막아주는 명령어 // 링크의 기본동작이란? 클릭 시 다른 페이지로 이동하는것
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

