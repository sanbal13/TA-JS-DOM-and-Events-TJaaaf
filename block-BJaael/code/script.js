let main = document.querySelector("main");

for(let i = 0; i < 500; i++) {
    let div = document.createElement('div');
    div.classList.add('box');
    div.innerText = i;
    main.append(div);
}

let div = document.querySelectorAll(".box");

div.forEach((box) => {
   box.addEventListener("mousemove", handlerNumber);
   box.addEventListener("mousemove", handlerColor);
});

function handlerNumber(){
    div.forEach((box) => {
        let randomNumber = randomNumberGenerator();
        box.innerText = randomNumber;
    });

}

function handlerColor(){
    div.forEach((box) => {
    let randomColor = randomColorGenerator();
    box.style.backgroundColor = randomColor;
    });
}

function randomNumberGenerator() {
    let randomNumber = Math.floor(Math.random()*500);
    return randomNumber;
}

function randomColorGenerator () {
    let color ='0123456789abcdef';
    let code = '#';
    for(let i = 0; i < 6; i++ ) {
      code = code + color.charAt(Math.floor(Math.random()*16));      
    }
    return code;
}