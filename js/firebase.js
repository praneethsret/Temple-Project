import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

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
const db = getFirestore(app);

export { auth, db };
