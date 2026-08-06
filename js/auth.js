const loginBtn = document.getElementById("loginBtn");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");

loginBtn.addEventListener("click", () => {

    if (email.value.trim() === "" || password.value.trim() === "") {
        message.style.color = "red";
        message.innerHTML = "Please enter Email and Password";
        return;
    }

    message.style.color = "green";
    message.innerHTML = "Logging in...";

    setTimeout(() => {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
    }, 800);

});
