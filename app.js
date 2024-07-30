import { collection, addDoc,
  getDocs,
}
 from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"; 
 import { db } from "./firebaseconfig.js"



const form = document.querySelector('#form');
const input1 = document.querySelector('#input1');
const ul = document.querySelector('#ul');

const arr = []

async function getData() {
  const querySnapshot = await getDocs(collection(db, "todos"));
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    arr.push(doc.data());
  });
  console.log(arr);
  renderTodo();
}

getData();

// function renderTodo(){
//   ul.innerHTML = '';
//   if (arr.length === 0) {
//     ul.innerHTML = "no data found";
//     return;
//   }
//   arr.map((item,index) => {
//     ul.innerHTML += `
// <div class="container text-center">
//   <div class="row">
//     <div class="col">
//       <span>${index + 1}</span>
//     </div>
//     <div class="col">
//       <span>${item.Todo}</span>
//     </div>
//     <div class="col">
//         <button class="btn btn-success "><i class="fa-solid fa-pen "></i></button> 
//         <button class="btn btn-danger"><i class="fa-solid fa-trash icon"></i></button> 
//         <br>
//         <br>
//     </div>
//   </div>
// </div>
//         `;
//   });
// }

// form.addEventListener('submit',async (event)=>{
//  event.preventDefault();
//  arr.push({
//   Todo : input1.value,
//  })
//  renderTodo();
//  try {
//     const docRef = await addDoc(collection(db, "users"), {
//     todo : input1.value,
//     });
//     // todo.value = ''
//     input1.value =''
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// //  input1.value = ''
// })  




function renderTodo() {
  ul.innerHTML = "";
  if (arr.length === 0) {
    ul.innerHTML = "no data found";
    return;
  }
  arr.map((item) => {
    ul.innerHTML += `
        <li>${item.todo}</li>
        `;
  });
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  arr.push({
    todo: input1.value,
  });
  renderTodo();
  try {
    const docRef = await addDoc(collection(db, "todos"), {
      todo: input1.value,
    });
    input1.value = "";
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});