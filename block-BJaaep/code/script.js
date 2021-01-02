let ul = document.querySelectorAll("ul");
let li1 = ul[0].querySelectorAll("li");
let li2 = ul[1].querySelectorAll("li");


for(let i = 0; i < li1.length; i++){
    let span = document.createElement('span');
    span.innerText = i + 1;
    span.style.display = "none";
    li1[i].append(span);
    li1[i].addEventListener('click', function(){
        handleClick(li1[i]);
    }); 
}


 function handleClick(ele) {
    let span = ele.querySelector('span');
    span.style.display ="inline"
}
/**************Second List *************************/

for(let i = 0; i < li2.length; i++){
    let span = document.createElement('span');
    span.innerText = i + 1;
    span.style.display = "none";
    li2[i].append(span);
}

ul[1].addEventListener('click',handleEvent);

function handleEvent(event) {
    let span = event.target.querySelector('span');
    span.style.display="inline";
}

 