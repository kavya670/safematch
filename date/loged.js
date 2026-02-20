// Load username from login page
document.getElementById("username").textContent =
localStorage.getItem("username") || "Julianne";

function like(btn){
    btn.textContent = "Liked 💗";
    btn.style.background = "#ff4081";
}