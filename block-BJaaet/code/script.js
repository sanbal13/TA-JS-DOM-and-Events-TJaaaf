let main = document.querySelector("main");
let text = document.querySelector(".text");
let crossDivElement;
let watched = [];
function handlekey(event) {  
    
     if(event.key === "Enter") 
     { 
        event.preventDefault(); 
        console.log("keyCode: " + event.keyCode);
        console.log("key: " + event.key)
        let outerDiv = document.createElement("div"); 
        outerDiv.classList.add("flex");
        outerDiv.classList.add("outerDiv");
        let initialDiv = document.createElement("div");   
        let crossDiv = document.createElement("div");     
        outerDiv.classList.add("movie");
        let input = document.createElement("input");
        input.type="checkbox"; 
        input.classList.add("cb");
        input.addEventListener("click", handleCheckboxClick); 
        let textNode = document.createTextNode(text.value) 
        initialDiv.append(input, textNode);
        let crossNode = document.createTextNode("❌");
        crossDiv.append(crossNode);
        crossDiv.classList.add("cross");
        outerDiv.append(initialDiv, crossDiv);
        main.append(outerDiv);    
        text.value = "";

        let first = main.querySelector(".outerDiv");
        first.style.border = "none";
        crossDivElement = document.querySelectorAll(".cross");
        crossDivElement.forEach((element) => {
            element.addEventListener("click", handleClick);
        })

        return false;
    }
}

function handleClick(event) {
    console.log(event.target);
    
    event.target.parentElement.remove();
}

text.addEventListener("keydown", handlekey);

function handleCheckboxClick(event) {
    let watchedMovie = event.target.parentElement.innerText;
    console.log(watchedMovie);
    if(!watched.includes(watchedMovie)){
       watched.push(watchedMovie);

   }
}
