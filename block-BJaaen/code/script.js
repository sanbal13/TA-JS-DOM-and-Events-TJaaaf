let you = document.querySelector(".you");
let computer = document.querySelector(".computer"); 
let userSymbol = you.querySelectorAll("i");
let computerSymbolAll = computer.querySelectorAll("i");
let result = document.createElement("div");
let main = document.querySelector("main");
let span = document.querySelectorAll("span");
let initialValue = 0;

main.append(result);
result.style.height = "4rem";
result.style.marginBottom ="2rem";
result.style.fontSize ="2rem";
result.style.fontWeight = "700";
result.style.paddingTop = "1rem";

you.addEventListener('click', handleClick);

function handleClick(event) {
     let userSymbolNo;
     userSymbol.forEach((item) => item.style.color = "green");
     computerSymbolAll.forEach((item) => item.style.color = "red");
     event.target.style.color ="black";
     if(event.target.dataset.name === "rock") {
        userSymbolNo = 0;              
     }
     if(event.target.dataset.name === "paper") {
        userSymbolNo = 1;
     }
     if(event.target.dataset.name === "scissors") {
        userSymbolNo = 2;
     }        
     computerTurn(userSymbolNo);   
}

function computerTurn(userSymbolNo) {
 let computerSymbolNo = Math.floor(Math.random()*1000)%3;
 if(computerSymbolNo === 0) {
   computerSymbolAll[0].style.color = "black";
 }
 if(computerSymbolNo === 1) {
    computerSymbolAll[1].style.color = "black";
 }
 if(computerSymbolNo === 2) {
    computerSymbolAll[2].style.color = "black";
 } 
 compute(userSymbolNo, computerSymbolNo);
}

function compute(userSymbolNo, computerSymbolNo) {
    console.log("User : " + userSymbolNo);
    console.log("Computer : " + computerSymbolNo);
    let winner;
    if(userSymbolNo === 0) {
        if(computerSymbolNo === 1) winner ="computer";
        if(computerSymbolNo === 2) winner = "you";
        if(computerSymbolNo === 0) winner ="tie";
    }
    else if(computerSymbolNo === 0) {
        if(userSymbolNo === 1) winner = "you";
        if(userSymbolNo === 2) winner ="computer";
    }
    else if (userSymbolNo > computerSymbolNo) {
        winner = "you";
    }
    else if (userSymbolNo === computerSymbolNo) {
        winner ="tie";
    }
    else {
        winner ="computer";
    }

    if(winner === "you"){
        result.innerText ="You Win!!!";
        span[0].innerText = +span[0].innerText + 1;

    }
    else if(winner ==="computer"){
        result.innerText ="Computer Wins!!!";
        span[1].innerText = +span[1].innerText + 1;
    }
    else {
        result.innerText ="It's a Tie";
    }

    if(span[0].innerText === "10"){
        alert("You won the match!!!");
        span[0].innerText = initialValue;
        span[1].innerText = initialValue;
    }
    if(span[1].innerText === "10"){
        alert("Computer won the match!!!");
        span[0].innerText = initialValue;
        span[1].innerText = initialValue;
    }
}
