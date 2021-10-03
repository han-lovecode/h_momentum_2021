const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    // padStart는 문자의 length를 체크해서 앞에 문자를 추가해주는 메소드
    // padEnd는 문자의 length를 체크해서 뒤에 문자를 추가해주는 메소드
    // 따라서, 시간은 우선 string으로 변한된 후 padStart 또는 padEnd 되어야 한다
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock();
setInterval(getClock, 1000);