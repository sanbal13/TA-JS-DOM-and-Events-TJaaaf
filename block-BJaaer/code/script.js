
let form = document.querySelector("form");
let modal = document.querySelector(".modal");
let close = document.querySelector(".close");

let modalName = document.querySelector(".modal-name");
let modalEmail = document.querySelector(".modal-email");
let modalYouLove = document.querySelector(".modal-youlove");
let modalColor = document.querySelector(".modal-color");
let modalRating = document.querySelector(".modal-rating");
let modalBook = document.querySelector(".modal-book");
let modalAgree = document.querySelector(".modal-agree");

let userInfo = {};

function handleSubmit(event) {
 event.preventDefault();
userInfo.name = form.elements.text.value;
userInfo.email = form.elements.email.value;
userInfo.youLove = form.elements.gender.value;
userInfo.color = form.elements.color.value;
userInfo.rating = form.elements.rate.value;
userInfo.bookGenre = form.elements.book.value;
userInfo.terms = form.elements.terms.checked;
form.style.display = "none";
modal.style.display ="inline";
console.log(userInfo);

modalName.innerText = userInfo.name;
modalEmail.innerText = userInfo.email;
modalYouLove.innerText = userInfo.youLove;
modalColor.innerText = userInfo.color;
modalRating.innerText = userInfo.rating;
modalBook.innerText = userInfo.bookGenre;
modalAgree.innerText = userInfo.terms ? ' agree ' : ' do not agree ';

}

function handleClick() {
    form.style.display = "block";
    modal.style.display ="none";
}

form.addEventListener("submit", handleSubmit);
close.addEventListener("click", handleClick);