let houseOptions = document.querySelector(".ul-options");
let cards = document.querySelector(".ul-cards");
let text = document.querySelector(".text");

/* This code is to deal with the search text box */

text.addEventListener("keyup", handleKeyup);

function handleKeyup(event) {
    cards.innerHTML = "";
    event.preventDefault();
    let search = event.target.value;
    got.houses.forEach((house)=> {
        house.people.forEach((person) => {
            if(person.name.includes(search)) {
                displayCard(person);
            }
        });
    });
}

/* This code is to respond to a click on any of the houses */
houseOptions.addEventListener("click", handleClick);

function handleClick(event) {   
    cards.innerHTML = "";
    let houses = document.querySelectorAll(".ul-options li");
    houses.forEach((house) =>{
    house.classList.remove("selected");    
    house.classList.add("default");
    });
    event.target.classList.add("selected");
    console.log(event.target);
    let houseName = event.target.innerText;
    got.houses.forEach((house) => { 
        if(house.name.toUpperCase() === houseName) {
            console.log(true);
            house.people.forEach((person) =>
              displayCard(person)
            );
        }
   });
}



/* Function to display a card given a person */
function displayCard(person) {
    let card = document.createElement("li");
    card.classList.add("flex-31");
    let div = document.createElement("div");
    div.classList.add("flex");
    div.classList.add("center");
    let img = document.createElement("img");
    let name = document.createElement("h2");
    name.classList.add("heading-name");
    let description = document.createElement("p");
    description.classList.add("description");
    let button = document.createElement("a");
    button.classList.add("button");
    button.setAttribute("href", person.wikiLink);
    img.src = person.image;
    name.innerText = person.name;
    description.innerText = person.description;
    button.innerText = "Learn More!";
    div.append(img, name);
    card.append(div, description, button);
    cards.append(card);
}

/* This code is called once during loading to display all the cards */
got.houses.forEach((house) => {
     house.people.forEach((person) => {
         displayCard(person);
     });
});

/* This code is udes to display the names of the houses at top */
got.houses.forEach((house) => {
    let li = document.createElement("li");
    li.classList.add("default");
    li.innerText = house.name;
    houseOptions.append(li);
 })

