// Adding a todo item on form submission
const toDoForm = document.querySelector('#todo-form');
const list = document.querySelector('#list');
const input = document.querySelector('#new-todo')
const enterBtn = document.querySelector('#enter')

// input.addEventListener("input", (event) => {
//     list.lastChild = event.target["new-todo"].value;//our solution: event.target.value;
// });

const handleSubmit = (event) => {
    event.preventDefault();
    const newToDo = event.target["new-todo"].value;// original: toDoForm.target | our solution: input.value;
    console.log(newToDo);
    const newListItem = document.createElement('li');
    newListItem.innerText = newToDo;
    list.appendChild(newListItem);
    event.target.reset();
}


console.log(toDoForm);

toDoForm.addEventListener('submit', handleSubmit);
//enterBtn.addEventListener('click', handleSubmit);

