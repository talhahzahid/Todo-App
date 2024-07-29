


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
        <button class="btn btn-danger">Delete</button> 
        <br>
    </div>
  </div>
</div>
        `;
  });
}

form.addEventListener('submit',(event)=>{
 event.preventDefault();
 console.log(input1.value);
 arr.push({
  Todo : input1.value,
 })
 console.log(arr);
 renderTodo();
 input1.value = ''
})  