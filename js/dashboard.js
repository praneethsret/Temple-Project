import { auth } from "./firebase.js";

import {
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, (user) => {

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    console.log("Welcome :", user.email);

});

logoutBtn.addEventListener("click", () => {

    if (confirm("Logout from Temple Management System?")) {

        signOut(auth)
            .then(() => {

                alert("Logged Out Successfully");

                window.location.href = "login.html";

            })
            .catch((error) => {

                alert(error.message);

            });

    }

});
