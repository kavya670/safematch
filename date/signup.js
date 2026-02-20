const form = document.getElementById("signupForm");

form.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

alert("Welcome " + name + "! Your account has been created.");

window.location.href = "login.html";

});


/* Floating hearts animation */

const heartsContainer = document.querySelector(".hearts");

function createHeart(){

const heart = document.createElement("span");
heart.innerHTML = "❤";

heart.style.left = Math.random() * window.innerWidth + "px";
heart.style.top = window.innerHeight + "px";
heart.style.fontSize = (Math.random()*20 + 10) + "px";

heartsContainer.appendChild(heart);

setTimeout(()=>{
heart.remove();
},10000);

}

setInterval(createHeart,800);