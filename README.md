# practicaljavascript

Requirements of making a todo list 
- It should have a place to store todos

ex: var todos = ['item 1', 'item 2', 'item 3']

- It should have a way to display the todos 

console.log('My todos:', todos)

- It should have a way to add new todos 

todos.push('new todo')

- It should have a way to change a todo  

todos[0] = 'changed!'

- It should have a way to delete a todo

todos.splice(0, 1)

<<<<<<< HEAD
=======
------------------------------------------------------

Requirements for making a function
- It should have a function to display todos

 function displayTodos() {
  console.log('My todos:' , todos);
 }
 displayTodos()
 
this will return the following:

My todos: (3) ["item 1", "item 2", "item 3"]

- It should have a function to add todos

 function addTodo() {
  todos.push('new todo');
 }

to see the display type the following:

 function addTodo(todo) {
  todos.push(todo);
  displayTodos();
 }

the return will be the following:

 My todos: (4) ["item 1", "item 2", "item 3", "new todo"]

after creating the functions needed you can also use this code to add:

 addTodo('some stuff')
 displayTodos()

and your result will be the following:

My todos: (5) ["item 1", "item 2", "item 3", "new todo", "some stuff"]

- It should have a function to change todos

function for changing listed below:

 function changeTodo(position, newValue){
  todos[position] = newValue;
 }

to display you will type this code below:
 
 displayTodos()
 
to make an actual change you will do the next step:
 
 changeTodo(0, 'changed again')

your result will be the following:

 My todos: (4) ["changed again", "item 2", "item 3", "new todo"]

but you will have to display the change to see it using:

 displayTodos()

- It should have a function to delete todos

deleting code is easy, just use splice:

 function deleteTodo(position) {
   todos.splice(position, 1);
   displayTodos();
 }

then call the function and tell it what you want to delete:

deleteTodo(0,1) >>> this will delete the 1st item in the array and only remove 1 item 

and display your result like this:

 displayTodos()
 
the result will be:

 My todos: (3) ["item 2", "item 3", "item 4"]
 
 

