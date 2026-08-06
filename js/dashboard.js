if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {

    if (confirm("Logout?")) {

        localStorage.removeItem("loggedIn");

        window.location.href = "login.html";

    }

});
