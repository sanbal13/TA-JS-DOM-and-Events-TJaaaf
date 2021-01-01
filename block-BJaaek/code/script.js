let first = document.querySelector(".first");
let second = document.querySelector(".second");


function clickHandler() {
first.style.backgroundColor = colorGenerator();
}
function mousemoveHandler() {
    second.style.backgroundColor = colorGenerator();
    }


function colorGenerator(){
    let color ="0123456789ABCDEF";
    let code ="#";
   for(let i = 0; i < 6; i++){
       code = code + color.charAt(Math.floor(Math.random()*16));   
   }
   console.log(code);
   return code;
}
first.addEventListener("click", clickHandler);
second.addEventListener("mousemove",mousemoveHandler)