// import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
// import {  getFirestore  } from "./firebaseconfig.js";



const form = document.querySelector('#form');
const input1 = document.querySelector('#input1');
const ul = document.querySelector('#ul');

const arr = []
{/* <span class="text-light">${index + 1} =====> </span>
        <span class="text-light">${item.Todo} <button class="btn btn-danger">Add Todo</button> </span>
        <br></br> */}
function renderTodo(){
  ul.innerHTML = '';
  arr.map((item,index) => {
    ul.innerHTML += `
<div class="container text-center">
  <div class="row">
    <div class="col">
      <span>${index + 1}</span>
    </div>
    <div class="col">
      <span>${item.Todo}</span>
    </div>
    <div class="col">
        <button class="btn btn-success "><i class="fa-solid fa-pen "></i></button> 
        <button class="btn btn-danger"><i class="fa-solid fa-trash icon"></i></button> 
        <br>
        <br>
    </div>
  </div>
</div>
        `;
  });
}

form.addEventListener('submit', (event)=>{
 event.preventDefault();
 arr.push({
  Todo : input1.value,
 })
 renderTodo();
//  try {
//     const docRef = await addDoc(collection(db, "todo"), {
//     todo : Todo.value,
//     });
//     todo.value = ';'
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
 input1.value = ''
})  