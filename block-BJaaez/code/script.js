{/* <li>
    <div class="flex">
        <div>
            <div class="circle"></div>
            <div class="todo">ABCD</div>
        </div>
            <div class="cross">X</div>
    </div>
</li>
 */}

function main() {

    let text = document.querySelector(".text");
    let ul = document.querySelector("ul");


    let action = document.querySelector(".action");
    let middle = document.querySelector(".middle");
    let last = document.querySelector(".last");
    
    let todoList = JSON.parse(localStorage.getItem("todo")) || [];
    createList(todoList);

    let clearCompleted = document.querySelector(".clear-completed");
    let all = document.querySelector(".all");
    let active = document.querySelector(".active");
    let completed = document.querySelector(".completed");
    let activeTab ="all";

    let arrow = document.querySelector(".arrow");
    arrow.addEventListener("click", handleArrow);

    function handleArrow(event) {
        let isAllDone = true;
        
        todoList.forEach((ele) => {
            
            if(ele.isDone === false){           
              isAllDone = false;
            }
        });
           
        if(!isAllDone){
            todoList.forEach((ele) => {
                ele.isDone = true;
            });
        } else {
            todoList.forEach((ele) => {
                ele.isDone = false;
            });
        }

        if(activeTab === "all") {
            allCode();           
         } else if(activeTab === "active"){
             activeCode();            
         } else if(activeTab === "completed"){
              completedCode();
         }
    }

    clearCompleted.addEventListener("click", handleClearCompleted);
    all.addEventListener("click", handleAll);
    active.addEventListener("click", handleActive);
    completed.addEventListener("click", handleCompleted);

    function handleClearCompleted(event) {
        todoList = todoList.filter((item)=> item.isDone === false);  
        if(activeTab === "all"){
            allCode();
        }    
        if(activeTab === "completed"){
            completedCode();
        }    

    }

    function handleAll(event) {
       event.target.style.border = "1px solid rgb(240, 112, 112)";
       allCode();      
    }

    function handleActive(event) {
        event.target.style.border = "1px solid rgb(240, 112, 112)";
        activeCode();      
     }

     function handleCompleted(event) {
        event.target.style.border = "1px solid rgb(240, 112, 112)";
        completedCode();      
     }

    function allCode() {
        activeTab ="all";
       createList(todoList);
       active.style.border = "none";
       completed.style.border = "none";       
    }
    
    function activeCode() {
        activeTab = "active";
        createList(todoList.filter((item) => item.isDone === false));
        all.style.border ="none"
        completed.style.border ="none";
        
    }
    
    function completedCode() {
        activeTab = "completed";
        createList(todoList.filter((item) => item.isDone === true));
        all.style.border = "none";
        active.style.border ="none";
        
    }

    function handleEnter(event) {
        event.preventDefault();
        let value = event.target.value;       

        if (event.keyCode === 13 && value != "") {
            
            let isPresent = todoList.some((ele) => {                
                return ele.name === value;                
            }        
            );

            if(isPresent){
                alert("Movie is already present");
            } else {
            
            let todo = {
                name: value,
                isDone: false
            }
            todoList.push(todo);
            event.target.value = "";
            createList(todoList);
        }
        }
    }

    function createList(todoListCurrent) {
        ul.innerHTML = "";
        todoListCurrent.forEach((element, index) => {
            let li = document.createElement("li");
            let flex = document.createElement("div");
            flex.classList.add("flex");
            let div = document.createElement("div");
            let circle = document.createElement("div");
            circle.classList.add("circle");
            circle.addEventListener("click", handleCircle);
           
            let todo = document.createElement("div");
            todo.classList.add("todo");
            todo.innerText = element.name;

            if (element.isDone) {
                circle.innerText = "✔";
                todo.classList.add("line-through");
            }
            let cross = document.createElement("div");
            cross.classList.add("cross");
            cross.innerText = 'X';
            cross.addEventListener("click", handleDelete);
            div.append(circle, todo);
            flex.append(div, cross);
            li.append(flex);
            circle.setAttribute("data-id", index);
            cross.setAttribute("data-id", index);
            li.setAttribute("data-id", index);
            todo.setAttribute("data-id", index);
            ul.append(li);
            todo.addEventListener("dblclick", handleDblClick);
        });
        
        localStorage.setItem("todo", JSON.stringify(todoList));

        let number = document.querySelector(".number");
        let len = todoList.filter((ele) => ele.isDone === false).length; 
        number.innerText = len + (len <= 1 ? " item left" : " items left");

        if (todoList.length > 0) {
            action.style.display = "block";
            middle.style.display = "block";
            last.style.display = "block";
        } else {
            action.style.display = "none";
            middle.style.display = "none";
            last.style.display = "none";
        }

    }

    function handleCircle(event) {
        let data = event.target.nextElementSibling.innerText;
        let dataId;
        todoList.indexOf(todoList.forEach((ele, index) =>{
        if(ele.name == data)
        dataId = index;
        }
        ));
        event.target.innerText = todoList[dataId].isDone ? "" : "✔";
        
        todoList[dataId].isDone = !todoList[dataId].isDone;

        if(activeTab === "all") {
           allCode();           
        } else if(activeTab === "active"){
            activeCode();            
        } else if(activeTab === "completed"){
             completedCode();
        }

    }

    function handleDelete(event) {
        index = event.target.dataset.id;
        todoList.splice(index, 1);
        createList(todoList);
    }

    function handleDblClick(event) {
        let li = document.querySelectorAll("li");
        
        let modifyText = document.createElement(`input`);
        modifyText.setAttribute("type", "text");
        modifyText.classList.add("modify-text");
        modifyText.value = event.target.innerText;
        li[event.target.dataset.id].innerHTML = "";
        li[event.target.dataset.id].append(modifyText);
        modifyText.addEventListener("keyup", handleModify);
    }

    function handleModify(event) {
        let index = event.target.parentElement.dataset.id;
        if (event.keyCode === 13) {
            todoList[index].name = event.target.value;
            createList(todoList);
        }


    }
    text.addEventListener('keyup', handleEnter);

}

main();