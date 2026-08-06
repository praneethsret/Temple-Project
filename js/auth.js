import { auth } from "./firebase.js";

import {
signInWithEmailAndPassword,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");

if(loginBtn){

loginBtn.addEventListener("click",()=>{

const userEmail = email.value.trim();
const userPassword = password.value.trim();

if(userEmail==="" || userPassword===""){
message.style.color="red";
message.innerHTML="Please enter email and password";
return;
}

message.style.color="blue";
message.innerHTML="Please wait...";

signInWithEmailAndPassword(auth,userEmail,userPassword)

.then(()=>{

message.style.color="green";
message.innerHTML="Login Successful";

setTimeout(()=>{
window.location.href="dashboard.html";
},1000);

})

.catch((error)=>{

message.style.color="red";
message.innerHTML=error.message;

});

});

}

onAuthStateChanged(auth,(user)=>{

if(user){

console.log("Logged In");

}else{

console.log("Not Logged In");

}

});
