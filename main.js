// Target the button
var button = document.querySelector('button');

// Also could have used
// var button = document.querySelector('#clear');
// var button = document.getElementById('clear');

button.addEventListener('click', function() {
    // alert("you have clicked the button"); Test
})


// Capture user input and stop whole page refreshing on submit

var formField = document.querySelector('form');

var input = document.getElementById('user-todo');

formField.addEventListener('submit', function(e) {
    // keep page from refreshing
    e.preventDefault();
    // test
    alert(input.value)
})