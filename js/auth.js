import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
getAuth,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyAAMK_YHlL6mzFnF0ri93EZQOCzSrJex8o",
authDomain: "sankalpa-siddhi-temple.firebaseapp.com",
projectId: "sankalpa-siddhi-temple",
storageBucket: "sankalpa-siddhi-temple.firebasestorage.app",
messagingSenderId: "442692965033",
appId: "1:442692965033:web:27a42cf94873ae37950fb8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginBtn = document.getElementById("loginBtn");
const status = document.getElementById("status");

loginBtn.addEventListener("click", function () {

const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();

if(email === "" || password === ""){
status.innerHTML = "Please enter email and password";
return;
}

status.innerHTML = "Logging in...";

signInWithEmailAndPassword(auth, email, password)
.then(() => {

status.style.color = "green";
status.innerHTML = "Login Successful";

setTimeout(function(){
window.location.href = "dashboard.html";
},1000);

})
.catch((error)=>{

status.style.color = "red";
status.innerHTML = error.message;

});

});
