function addTodo() {
    let todolist = document.querySelector("#todos");
    let todo = form.elements.todo.value;
    let tododiv = document.createElement('div');
    tododiv.id = "Todo"
    tododiv.classList.add("Todo");
    let removebtn = document.createElement('button')
    tododiv.className = "todo";
    removebtn.setAttribute("onClick", "removeTodo(this.parentNode)");
    removebtn.innerHTML = 'Remove'
    let todotext = document.createElement('p');
    todotext.innerHTML = todo;
    todolist.appendChild(tododiv);
    tododiv.appendChild(todotext);
    tododiv.appendChild(removebtn);
};

function removeTodo(element) {
    var el = element;
    el.remove();
}

const form = document.querySelector("#enter-todo");
form.addEventListener('submit', function(e){
    e.preventDefault();
    addTodo();
});