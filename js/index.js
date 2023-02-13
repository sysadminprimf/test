const render = () => {
    let todos = JSON.parse(localStorage.getItem('todos'));
    let listOfTodo = document.querySelector('.js-todo-list');
    listOfTodo.innerHTML = '';
    todos.forEach((el, index) => {
        listOfTodo.innerHTML += `<div class="simple"><span>${index+1}: ${el.text}</span> <span class="removeTodo" data-id="${el.id}">&#10006;</span></div>`
    })
    let removeTodoBtns = document?.querySelectorAll('.removeTodo');
    removeTodoBtns.forEach(el => el.addEventListener('click', () => removeTodo(el)));
}

const addTodo = () => {
    let todos = JSON.parse(localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')) : [];
    let textTodo = document.querySelector('.textTodo').value;
    document.querySelector('.textTodo').value = '';
    if(textTodo) {
        todos.push({
            text: textTodo,
            id: todos.length / 10 * Math.random()
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    render();
}

const removeTodo = (el) => {
    let todos = JSON.parse(localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')) : [];
    let id = el.getAttribute('data-id');
    todos = todos.filter(el => {
        if (el.id != id ) return true;
    })
    
    localStorage.setItem('todos', JSON.stringify(todos));
    render();
}

document.querySelector('.addTodo').addEventListener('click', () => addTodo());
document.querySelector('.textTodo').addEventListener('keydown', (e) => {
    if (e.keyCode == 13) addTodo();
});
render();

