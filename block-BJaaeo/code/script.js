let display = document.querySelector(".display");
let keys = document.querySelector(".keys");
keys.addEventListener("click", handleClick);

function handleClick(event) {
    console.log(event.target.innerText);
  

    if(event.target.classList.contains('number')) {
        if(display.innerText.endsWith("+") ||
           display.innerText.endsWith("-") ||
           display.innerText.endsWith("*") ||
           display.innerText.endsWith("/") 
           ) {
             display.innerText = display.innerText +" " +event.target.dataset.content; 
           } else {
            display.innerText = display.innerText +event.target.dataset.content; 
           }

        console.log(display.innerText);
    }
    if (event.target.classList.contains('operation')) {        
        display.innerText = display.innerText + event.target.dataset.content; 
        console.log(display.innerText);        
    }
     if (event.target.dataset.content === 'C') {
        display.innerText = "";
      }  
    if(event.target.dataset.content === '='){
        display.innerText = eval(display.innerText);
    }  

}

