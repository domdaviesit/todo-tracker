// Variables

// Target the form, unordered list, button and input

var form = document.querySelector('form');
var todoList = document.querySelector('ul');
var button = document.querySelector('button');
// Also could have used
// var button = document.querySelector('#clear');
// var button = document.getElementById('clear');
var input = document.getElementById('user-todo');


// Action, then call a function (passing in the event (e))
// form.addEventListener('submit', function(e) {
    // keep page from refreshing
    // e.preventDefault();
    // test
    // alert(input.value)

//     todoMaker(input.value);
//     input.value = "";
// });



// Declare variable 'todosArray' to hold our todos.  set it to empty array
// var todosArray = [];

var todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) :[];

localStorage.setItem('todos', JSON.stringify(todosArray));

var storage = JSON.parse(localStorage.getItem('todos'));

form.addEventListener('submit', function(e) {
    e.preventDefault();

    todosArray.push(input.value);

    localStorage.setItem('todos', JSON.stringify(todosArray));

    todoMaker(input.value);
    input.value = "";
});

var todoMaker = function(text){
    var todo = document.createElement('li');
    todo.textContent = text;
    todoList.appendChild(todo);
}

for (var i = 0; i < storage.length;i++) {
    todoMaker(storage[i]);
}

button.addEventListener('click', function() {
    // alert("you have clicked the button"); Test
    localStorage.clear();
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
});