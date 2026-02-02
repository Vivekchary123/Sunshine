// 🔐 FIREBASE CONFIG (PASTE YOUR OWN DETAILS)
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
firebase.initializeApp(firebaseConfig);

// Firestore reference
const db = firebase.firestore();

// Save user response
function submitResponse(choice) {
  db.collection("responses").add({
    answer: choice,
    timestamp: new Date()
  })
  .then(() => {
    document.getElementById("status").innerText =
      "Response saved successfully 💛";
  })
  .catch((error) => {
    document.getElementById("status").innerText =
      "Error saving response ❌";
    console.error(error);
  });
}
