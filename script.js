// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔁 PASTE YOUR CONFIG HERE
const firebaseConfig = {
  apiKey: "AIzaSyDAoq9Umjl7galoK-8oKT_9Z__vSXKShag",
  authDomain: "sunshine-a50c2.firebaseapp.com",
  projectId: "sunshine-a50c2",
  storageBucket: "sunshine-a50c2.firebasestorage.app",
  messagingSenderId: "739390873590",
  appId: "1:739390873590:web:5762adff8492111729f1d7",
  measurementId: "G-6HHTF4KPWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Form submit
const form = document.getElementById("responseForm");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  try {
    await addDoc(collection(db, "responses"), {
      name: name,
      message: message,
      createdAt: serverTimestamp()
    });

    status.innerText = "✅ Response saved successfully!";
    form.reset();

  } catch (error) {
    status.innerText = "❌ Error saving response";
    console.error(error);
  }
});
