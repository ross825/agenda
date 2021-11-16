const firebaseConfig = {
  apiKey: "AIzaSyCqJ_VMUhuw1UT_p7RXFBANHwxOhP97u9c",
  authDomain: "prueba-1a8a6.firebaseapp.com",
  projectId: "prueba-1a8a6",
  storageBucket: "prueba-1a8a6.appspot.com",
  messagingSenderId: "965474343601",
  appId: "1:965474343601:web:60bd52b98b48762a4d6090"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let nombre = document.getElementById ("name");
let cel = document.getElementById ("celphone");
let correo = document.getElementById ("correo");
let save_btn = document.getElementById ("save-btn");

save_btn.addEventListener("click",() =>{
  let data ={
    nombre: nombre.value,
    correo: correo.value,
    celular: cel.value,
  };
  save_btn_firebase(data);
});
const save_btn_firebase=(d)=>{
  db.collection("contactos").add(d)
  .then((docRef)=>{
    console.log("Document written with ID :", docRef.id);
  })
  .catch((error)=>{
    console.eror("Error adding document: ", error);
  });
};



const get_data_localstorage = () => {
  tasks = [];
  if (localStorage.getItem("tasks") != null) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
};

const set_data_localstorage = () =>  {
    let data = {
      id: tasks.length + 1,
      nombre: nombre_task.value,
      celphone: cel_task.value,
      correo: correo_task.value,
      complete: false,
    };
};
