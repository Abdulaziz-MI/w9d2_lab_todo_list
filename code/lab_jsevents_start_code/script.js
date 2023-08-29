// Adding a todo item on form submission
const toDoForm = document.querySelector('#todo-form');
const list = document.querySelector('#list');
const input = document.querySelector('#new-todo')
const enterBtn = document.querySelector('#enter')

const handleSubmit = (event) => {
    event.preventDefault();
    const newToDo = toDoForm.target.value;
    console.log(newToDo);
    const newListItem = document.createElement('li');
    newListItem.innerText = newToDo;
    list.appendChild(newListItem);

}

console.log(toDoForm);

toDoForm.addEventListener('submit', handleSubmit);
enterBtn.addEventListener('click', handleSubmit);