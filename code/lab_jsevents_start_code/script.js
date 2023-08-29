// Adding a todo item on form submission
const toDoForm = document.querySelector('#todo-form');
const list = document.querySelector('#list');
const input = document.querySelector('#new-todo');
const enterBtn = document.querySelector('#enter');
const deleteButton = document.getElementsByClassName('deleteItem');



const handleSubmit = (event) => {
    event.preventDefault();
    const newToDo = event.target["new-todo"].value;// original: toDoForm.target | our solution: input.value;
    console.log(newToDo);
    const newListItem = document.createElement('li');
    newListItem.innerText = newToDo;
    list.appendChild(newListItem);
    event.target.reset();
    const deleteButton = document.createElement("BUTTON");
    const txt = document.createTextNode("Delete!");
    deleteButton.appendChild(txt);
    deleteButton.className = "deleteItem";
    newListItem.append(deleteButton);

    
}

// Click on delete button to hide the current list item
for(i = 0; i< deleteButton.length; i++){
    deleteButton[i].onclick = function(){
        var div = list.parentElement;
        div.style.display = "none";

    }
}



console.log(toDoForm);

toDoForm.addEventListener('submit', handleSubmit);
deleteButton.addEventListener('click', deleteButton);




