const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos (){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
}

function deleteToDo(e){
    const li = e.target.parentElement;
    li.remove();
    console.log(typeof li.id); //string
    toDos = toDos.filter((allTodo) => allTodo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌"
    li.appendChild(span);
    li.appendChild(button)
    toDoList.appendChild(li);
    button.addEventListener("click", deleteToDo)
}

function handleToDoSubmit (e){
    e.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text : newToDo,
        id : Date.now()
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj); 
    saveToDos();   
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); // string -> array로!
    toDos = parsedToDos; // 빈 배열이었던 toDos에 parsedToDos로 교체해준 뒤에
    parsedToDos.forEach(paintToDo); // parsedToDos(array)의 item을 paint 해줘!
}    