const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit (event){
    event.preventDefault();
    //onLoginSubmit가 실행되면 JS 자동으로 전달하는 정보는 event argument에 저장된다.
    //입력값이 증발해 버리지 않도록 처음 저장되는 event의 default값(form의 기본 동작인 submit)을 막아주는 코드
    loginForm.classList.add(HIDDEN_CLASSNAME);    
    const usernameWrittenByUser = loginInput.value;
    localStorage.setItem(USERNAME_KEY, usernameWrittenByUser);
    paintingGreetings(usernameWrittenByUser);
}

function paintingGreetings(username){
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME); 
    loginForm.addEventListener("submit", onLoginSubmit);
} else {    
    paintingGreetings(savedUsername);   
}

