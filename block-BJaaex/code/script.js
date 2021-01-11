
let activeCards = [];
let count = 0;
let moves = 0;
let startTime;
let p = document.querySelector(".time");
function handleClick(event) {

    if (event.target.classList.contains("card") && !event.target.classList.contains("deactivate") && event.target != activeCards[0]) {
        startTime = startTime || new Date();
        let card = event.target;      
        count++;
        if (count === 1) {
            activeCards = [];
            moves++;
        }
        activeCards.push(card);
        card.classList.add("active");

        if (count === 2) {
            count = 0;
            
             if (activeCards[0].firstElementChild.alt == activeCards[1].firstElementChild.alt)  {
                activeCards.forEach((card) => {
                    card.innerText = "";
                    card.classList.remove("active");
                    card.classList.add("deactivate");
                }
                )
            }
            checkGameOver(moves, startTime);
          
            setTimeout(function () {
                activeCards.forEach(card => {
                    card.classList.remove("active");
                });
            }
                , 500);
        }
    }
}
/******** This function checks for the completion of game ***********************/
function checkGameOver(moves, startTime) {

    let cards = document.querySelectorAll(".card");
    if([... cards].every((card) => card.classList.contains("deactivate"))){
        let modal = document.querySelector(".modal");
        modal.classList.remove("hide");
        modal.classList.add("show");    
        modal.parentElement.style.border = "none"; 
        let totalMoves = document.createElement("p");
        totalMoves.innerText = "Total number of moves: " + moves;
        let totalTime = document.createElement("p");
        totalTime.innerText = "Total time taken: " + (new Date()- startTime)/1000 +" secs";
        modal.append(totalMoves, totalTime);
    }
}



/****************** This function generates the cards *************************/

function generateCards(symbolsList, root) {

    symbolsList.forEach((symbol) => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("flex");
        card.classList.add("flex-wrap");
        let image = document.createElement("img");
        image.classList.add("symbol");
        image.src = symbol.img;
        image.alt = symbol.name;
        card.append(image);
        root.append(card);
    });
}
/*********************** Function to shuffle the cards **************************/

function shuffle(arr) {
    arr.sort(() => 0.5 - Math.random());
    return arr;
}
/************************* The game starts here ***************************/
function startGame() {
    let root = document.querySelector(".card-frame");
    root.addEventListener("click", handleClick);
    let symbolsList = symbols.concat(symbols);
    let finalSymbolsList = shuffle(symbolsList);
    generateCards(finalSymbolsList, root);
    
}

/********************** The Game starts here ********************************/
startGame();