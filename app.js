import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
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
    arr.push({ ...doc.data(), id: doc.id });
  });
  renderTodo();
}
getData();






function renderTodo() {
  ul.innerHTML = "";
  if (arr.length === 0) {
    ul.innerHTML = "No Data Found";
    return;
  }
  arr.map((item,index) => {
    ul.innerHTML += `
          <div class="container text-center">
  <div class="row">
    <div class="col">
    ${index + 1}
    </div>
    <div class="col">
      ${item.todo}
    </div>
    <div class="col">
      <button class="deletebtn btn btn-danger">Delete</button>
       <button class="editbtn btn btn-success">Edit</button>
    </div>
  </div>
</div>
<br>
          `;
  });
  const deletebtn = document.querySelectorAll('.deletebtn');
  const editbtn = document.querySelectorAll('.editbtn');

  // deletebtn.forEach((btn,index)=>{
  //   // console.log(btn);
  // btn.addEventListener('click', async ()=>{
  //   console.log(arr[index]);
  //   await deleteDoc(doc(db, "todo", arr[index].id));
  //   arr.splice(index , 1)
  //   renderTodo()
  // })
  // })
  deletebtn.forEach((btn, index) => {
    btn.addEventListener("click", async () => {
      console.log(arr[index]);
      await deleteDoc(doc(db, "todos", arr[index].id));
      console.log("Data deleted");
      arr.splice(index, 1);
      renderTodo();
    });
  });


  editbtn.forEach((btn, index) => {
    btn.addEventListener("click", async () => {
      const updatedNewValue = prompt("enter new value");
      const todoUpdate = doc(db, "todos", arr[index].id);
      await updateDoc(todoUpdate, {
        todo: updatedNewValue,
      });
      console.log("Data updated");
      arr[index].todo = updatedNewValue;
      renderTodo();
    });
  });


}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
    try {
    const docRef = await addDoc(collection(db, "todos"), {
      todo: input1.value,
    });
    console.log("Document written with ID: ", docRef.id);
    arr.push({
      todo: input1.value,
      id: docRef.id,
    })
    renderTodo()
    input1.value = "";
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});




