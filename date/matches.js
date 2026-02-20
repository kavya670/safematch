document.querySelectorAll(".like").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("liked");

        if (btn.classList.contains("liked")) {
            btn.innerHTML = "💖";
        } else {
            btn.innerHTML = "❤";
        }
    });
});