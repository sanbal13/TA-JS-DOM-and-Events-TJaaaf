let todo = document.createElement("div");
let text = document.createElement("input");
text.classList.add("text");
text.addEventListener("keyup", handleKeyup);
text.placeholder = "What do you want to do?";
text.type = "text";
todo.append(text);

let ul = document.createElement("ul");
todo.append(ul);
main.append(todo);

let todoData = JSON.parse(localStorage.getItem("todos")) || [];


/* *********************************************************************** Creating the Status Div ******************************************************* */

let status = document.createElement("div");
status.classList.add("status");
let all = document.createElement("div");
all.innerText = "All";
all.classList.add("all");
all.classList.add("status-active");
let active = document.createElement("div");
active.innerText = "Active";
active.classList.add("active");
let completed = document.createElement("div");
completed.innerText = "Completed";
completed.classList.add("completed");
status.addEventListener("click", handleStatus);
status.append(all, active, completed);
ul.append(status);
let focus = "all";

/* ******************************************************Function to handle different types of todos ***************************************************** */
function handleStatus(event) {
    removeActiveStatus();
   if(event.target.innerText === "All") {    
       focus = "all"       
       all.classList.add("status-active");            
       createUI(todoData);
   } else if (event.target.innerText === "Active") {
       focus = "active";
       active.classList.add("status-active");
       let todoActive = todoData.filter((elem) => !(elem.isSelected));           
       createUI(todoActive);  
   } else if (event.target.innerText === "Completed") {
       focus = "completed";
       completed.classList.add("status-active");           
       let todoCompleted = todoData.filter((elem) => elem.isSelected);
       createUI(todoCompleted);
} 
}

/* ******************************************************Remove status active for all ***************************************************** */

function removeActiveStatus() {
    all.classList.remove("status-active");
    active.classList.remove("status-active");
    completed.classList.remove("status-active");
}

/* ****************************************************Accepting Input from Text Input on Enter******************************************************* */
let count = 0;
function handleKeyup(event) {
    
    event.preventDefault();
    
    if(event.keyCode === 13 && text.value != "") {
        count++;
        let todo = text.value;
        let isSelected = false;
        let listItem = {};
        listItem.todo = todo;
        listItem.isSelected = isSelected;
        listItem.rank = count;
        todoData.push(listItem);
        localStorage.setItem("todos", JSON.stringify(todoData));
        text.value = "";
        callCreateUI(todoData);        
    }
}

/* ************************************************************************* Creating the UI ******************************************************* */

function createUI(todoList){
    let todo = document.querySelector("todo");
    let liArray = document.querySelectorAll("li");
    liArray.forEach(elem => elem.remove());
    if(todoData.length > 0) {
    status.classList.add("visible");
    } else {
        status.classList.remove("visible");
        focus = "all";
        removeActiveStatus();
        all.classList.add("status-active");
    }

   todoList.forEach((ele, index) => {
    
    let li = document.createElement("li");
    li.classList.add("flex");
    let data = document .createElement("div");
    data.classList.add("flex");
    data.classList.add("data");
    li.classList.add("space-between");
    let cross = document.createElement("div");
    cross.classList.add("cross");
    cross.addEventListener("click", handleCross);
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.addEventListener("click", handleCircle);
    let todo = document.createElement("div");
    todo.classList.add("todo");
    cross.innerText = "X";
    todo.innerText = ele.todo;
    if(ele.isSelected) {
        circle.classList.add("red");
        todo.classList.add("strike");
    } else {
        circle.classList.remove("red");
    }
    todo.setAttribute("data-index", index);
    data.append(circle, todo);    
    li.append(data, cross);
    ul.append(li);
   });
}

createUI(todoData);

/* ************************************************************************* Handle cross ******************************************************* */

function handleCross(event) {
      let cross = event.target;
      let index = cross.previousElementSibling.children[1].getAttribute("data-index");
      todoData.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todoData));
      callCreateUI();

}

/* ************************************************************************* Handle circle ******************************************************* */

function handleCircle(event) {
    let circle = event.target;
    index = circle.nextElementSibling.getAttribute("data-index");
    todoData[index].isSelected = !(todoData[index].isSelected); 
    localStorage.setItem("todos", JSON.stringify(todoData));
    callCreateUI();
}

/* ***************************************************Function to Call Creating the UI function ******************************************************* */

function callCreateUI() {
    if (focus === "all") {
        console.log("All");
        createUI(todoData);        
    } else if(focus === "active") {
        console.log("active");
       let todoActive = todoData.filter((elem) => !(elem.isSelected));           
       createUI(todoActive);
       
    } else if (focus === "completed") {
        console.log("Deleted");
        let todoCompleted = todoData.filter((elem) => elem.isSelected);
        createUI(todoCompleted);
    }
}



