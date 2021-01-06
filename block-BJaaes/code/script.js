let form = document.querySelector("form");
let usernameTag = document.querySelector("#username");
let nameTag = document.querySelector("#name");
let emailTag = document.querySelector("#email");
let phoneTag = document.querySelector("#phone");
let passwordTag = document.querySelector("#password");
let confirmPasswordTag = document.querySelector("#confirm-password");
let formControl = document.querySelectorAll(".form-control");

let small = document.querySelectorAll("small");

let usernameLength = 4;
let emailLength = 6;
let phoneLength = 7;

function containsNumber(arr){
    return arr.some((ele) => Number(ele)); 
}
function containsAt(arr){
    return arr.some((ele) => ele =='@'); 
}
function containsAllNumber(arr){
    return arr.every((ele) => Number(ele)); 
}

function handleSubmit(event) {
    event.preventDefault();
    
    small.forEach(ele => ele.innerText="");
    formControl.forEach(ele => ele.children[1].classList.remove("success"));

    let username = event.target.username.value;
    let name = event.target.name.value;
    let email = event.target.email.value;
    let phone = event.target.phone.value;
    let password = event.target.password.value;
    let confirmPassword = event.target.confirmpassword.value;

    if(username.length < usernameLength) {
       usernameTag.nextElementSibling.innerText = `${usernameTag.previousElementSibling.innerText} can't be less than ${usernameLength} characters`;
       usernameTag.classList.add('error');
    } else if(containsNumber(name.split(''))){
        nameTag.nextElementSibling.innerText = `You can't use number in  the name field`;
        nameTag.classList.add('error');
    } else if(!containsAt(email.split(''))){
        emailTag.nextElementSibling.innerText = `Not a valid email`;
        emailTag.classList.add('error');
    } else if(email.length < emailLength){
        emailTag.nextElementSibling.innerText = `${emailTag.previousElementSibling.innerText} can't be less than ${emailLength} characters`;
        emailTag.classList.add('error');
    } else if(!containsAllNumber(phone.split(''))){
        phoneTag.nextElementSibling.innerText = "Phone number can only contain numbers";
        phoneTag.classList.add('error');
    } else if(password != confirmPassword) {
        confirmPasswordTag.nextElementSibling.innerText = "Password and confirm password must be same"; 
        passwordTag.classList.add('error');
        confirmPasswordTag.classList.add('error');
    } else { 
        formControl.forEach(ele => ele.children[1].classList.add("success"));
        alert ("User Added Successfully!");
    }
}



form.addEventListener('submit', handleSubmit);