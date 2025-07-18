// Firebase Config - Ganti dengan punyamu
const firebaseConfig = {
  apiKey: "AIzaSyDZtVFMa4YA3jOYX9i97Up5w3ei0JNVTEw",
  authDomain: "spareflow-2980d.firebaseapp.com",
  projectId: "spareflow-2980d",
  storageBucket: "spareflow-2980d.firebasestorage.app",
  messagingSenderId: "198624104820",
  appId: "1:198624104820:web:19e8f9a47c838bddc79c21"
};

// Init Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Tambah Data
function addData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  db.collection("users").add({ name, email }).then(() => {
    alert("Data disimpan!");
    loadData();
  });
}

// Baca Data
function loadData() {
  const list = document.getElementById("data-list");
  list.innerHTML = "";

  db.collection("users").get().then(snapshot => {
    snapshot.forEach(doc => {
      const data = doc.data();
      const li = document.createElement("li");
      li.textContent = `${data.name} (${data.email})`;
      list.appendChild(li);
    });
  });
}

// Load saat pertama
loadData();
