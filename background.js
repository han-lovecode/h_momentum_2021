const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"]; //7장

const chosenImage = images[Math.floor(Math.random() * images.length)];
//images[1] = "1.jpg"

const bgImage = document.createElement("img"); // <img>
bgImage.style.width = "100%";
bgImage.style.position = "absolute";
bgImage.style.top = 0;
bgImage.style.zIndex = -999999;


bgImage.src = `img/${chosenImage}`;
//백틱은 string을 삽입할 때 따옴표를 제거하고 넣을 수 있다.

document.body.appendChild(bgImage);