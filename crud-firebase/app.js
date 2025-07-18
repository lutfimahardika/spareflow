// Firebase Config - Ganti dengan punyamu
const firebaseConfig = {
  apiKey: "ISI_APIKEY_MU",
  authDomain: "ISI_AUTH_DOMAIN",
  projectId: "ISI_PROJECT_ID",
  storageBucket: "ISI_STORAGE_BUCKET",
  messagingSenderId: "ISI_MSG_SENDER_ID",
  appId: "ISI_APP_ID"
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
