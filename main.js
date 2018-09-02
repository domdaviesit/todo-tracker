// Variables

// Target the form, unordered list, button and input

var form = document.querySelector('form');
var todoList = document.querySelector('ul');
var button = document.querySelector('button');
// Also could have used
// var button = document.querySelector('#clear');
// var button = document.getElementById('clear');
var input = document.getElementById('user-todo');


button.addEventListener('click', function() {
    // alert("you have clicked the button"); Test
})

// Action, then call a function
form.addEventListener('submit', function(e) {
    // keep page from refreshing
    e.preventDefault();
    // test
    alert(input.value)
})

