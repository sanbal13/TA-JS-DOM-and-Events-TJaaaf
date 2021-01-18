let vscode = document.querySelector(".vscode");
let string = document.querySelector(".string");
let array = document.querySelector(".array");
let main = document.querySelector("main");
let time = document.createElement("div");
let date = document.createElement("div");
let h1 = document.createElement("span");
let h2 = document.createElement("span");
let m1 = document.createElement("span");
let m2 = document.createElement("span");
let s1 = document.createElement("span");
let s2 = document.createElement("span");
let colon1 = document.createElement("span");
let colon2 = document.createElement("span");
let weekday = document.createElement("span");
h1.classList.add("digit");
h2.classList.add("digit");
m1.classList.add("digit");
m2.classList.add("digit");
s1.classList.add("digit");
s2.classList.add("digit");
colon1.classList.add("digit");
colon2.classList.add("digit");
weekday.classList.add("weekday");

colon1.innerText = ":";
colon2.innerText = ":";
main.append(time);
main.append(date);

function setTimeAndDate() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let weekdayNo = now.getDay();
    let weekdayText = findWeekday(weekdayNo);


    h1.innerText = Math.floor(hours / 10);
    h2.innerText = hours % 10;
    m1.innerText = Math.floor(minutes / 10);
    m2.innerText = minutes % 10;
    s1.innerText = Math.floor(seconds / 10);
    s2.innerText = seconds % 10;

    time.classList.add("time");
    time.append(h1,h2,colon1, m1, m2, colon2, s1, s2);

    day = prependZero(day);
    month = prependZero(month);
    date.classList.add("date");
    date.innerText = `${day} / ${month} / ${year}`;

    weekday.innerText = weekdayText;
    date.append(weekday);

}

function prependZero(num) {
    if(num < 10) {
        num = '0'+ num;
    } 
    return num;
}

function findWeekday(dayNo) {
    switch(dayNo) {
        case 0:
            return 'Sunday';
        case 1: 
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3: 
            return 'Wednesday';    
        case 4:
            return 'Thursday';
        case 5: 
            return 'Friday';               
        case 6: 
            return 'Saturday';  
        default:
            return 'invalid';                   
    }
}
setInterval( setTimeAndDate, 1000);


function generateRandomNumber(max) {
    return Math.floor(Math.random() * max);
}
function createUI() {
    function vscodeUI() {
        vscode.innerHTML = "";
        let h2 = document.createElement("h2");
        h2.classList.add("heading-section");
        h2.innerText = "VS Code Shortcuts";
        let shortcut = document.createElement("h3");
        let description = document.createElement("div");
        shortcut.classList.add("heading-shortcut");
        description.classList.add("description");
        let data = vscodeData[generateRandomNumber(vscodeData.length)];
        let button = document.createElement("button");
        shortcut.innerText = data.shortcut;
        description.innerText = data.description;

        button.innerHTML = `🔁 Generate`;
        button.addEventListener("click", handleString);
        function handleString() {
            vscodeUI();
        }
        vscode.append(h2, shortcut, description, button);
    }



    function stringUI() {
        string.innerHTML = "";
        let h2 = document.createElement("h2");
        h2.classList.add("heading-section");
        h2.innerText = "String Methods"
        let heading = document.createElement("h3");
        let returnType = document.createElement("p");
        let example = document.createElement("p");
        let link = document.createElement("a");
        let strong = document.createElement("strong");
        let textNode = document.createElement("textNode");
        let button = document.createElement("button");

        heading.classList.add("heading-method");
        returnType.classList.add("return-type");
        example.classList.add("example");
        link.classList.add("link");

        strong.innerText = "Returns: "
        button.innerText = "🔁Generate";
        button.addEventListener("click", handleString);
        function handleString() {
            stringUI();
        }

        let stringData = stringMethods[generateRandomNumber(stringMethods.length)];
        heading.innerText = stringData.name;

        textNode = stringData.return;
        returnType.append(strong, textNode);
        stringData.code.forEach((ele) => {
            let p = document.createElement("p");
            if (ele.startsWith("//")) {
                ele = ele.slice(ele.indexOf(":") > 0 ? ele.indexOf(":") + 2 : 0);
                let output = document.createElement("p");
                output.classList.add("output");
                output.innerText = ele;
                example.append(output);
            } else {
                p.innerText = ele;
                example.append(p);
            }
        });
        link.href = stringData.href;
        link.innerText = "Know More";
        string.append(h2, heading, returnType, example, link, button);
    }


    function arrayUI() {
        array.innerHTML = "";
        let h2 = document.createElement("h2");
        h2.classList.add("heading-section");
        h2.innerText = "Array Methods"
        let heading = document.createElement("h3");
        let returnType = document.createElement("p");
        let example = document.createElement("p");
        let link = document.createElement("a");
        let strong = document.createElement("strong");
        let textNode = document.createElement("textNode");
        let button = document.createElement("button");

        heading.classList.add("heading-method");
        returnType.classList.add("return-type");
        example.classList.add("example");
        link.classList.add("link");

        strong.innerText = "Returns: "
        button.innerText = "🔁Generate";
        button.addEventListener("click", handleArray);
        function handleArray() {
            arrayUI();
        }

        let arrayData = arrayMethods[generateRandomNumber(arrayMethods.length)];
        heading.innerText = arrayData.name;

        textNode = arrayData.return;
        returnType.append(strong, textNode);
        arrayData.code.forEach((ele) => {
            let p = document.createElement("p");
            if (ele.startsWith("//")) {
                ele = ele.slice(ele.indexOf(":") > 0 ? ele.indexOf(":") + 2 : 0);
                let output = document.createElement("p");
                output.classList.add("output");
                output.innerText = ele;
                example.append(output);
            } else {
                p.innerText = ele;
                example.append(p);
            }


        });
        link.href = arrayData.href;
        link.innerText = "Know More";
        array.append(h2, heading, returnType, example, link, button);
    }

    arrayUI();
    stringUI();
    vscodeUI();

}
createUI();
setTimeAndDate();
