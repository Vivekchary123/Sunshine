const firebaseConfig = {
  apiKey: "AIzaSyDAoq9Umjl7galoK-8oKT_9Z__vSXKShag",
  authDomain: "sunshine-a50c2.firebaseapp.com",
  projectId: "sunshine-a50c2",
  storageBucket: "sunshine-a50c2.firebasestorage.app",
  messagingSenderId: "739390873590",
  appId: "1:739390873590:web:5762adff8492111729f1d7",
  measurementId: "G-6HHTF4KPWW"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function submitResponse(answer) {
  db.collection("responses").add({
    response: answer,
    time: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    document.getElementById("status").innerText = "💛 Response saved!";
    setTimeout(() => {
      window.location.href = answer === "Yes" ? "yes.html" : "no.html";
    }, 800);
  })
  .catch(err => console.error(err));
}
