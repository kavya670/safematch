function login(){

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "" || password === ""){
        alert("Please enter name and password");
        return;
    }

    // Save username to use in next page
    localStorage.setItem("username", username);

    // Go to dashboard page
    window.location.href = "loged.html";
}