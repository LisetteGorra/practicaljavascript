var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos', this.todos);
    if (this.todos.length === 0) {
    console.log('Your todo list is empty!');
  }
  else {
   console.log('My Todos:');
   for (i = 0; i < this.todos.length; i++) {
     
     if(this.todos[i].completed === true) {
       console.log('(x)', this.todos[i].todoText);
        } 
        else {
       console.log('()', this.todos[i].todoText);
        }
      }
    }
  },
 addTodo: function(todoText) { 
    this.todos.push({
      todoText: todoText,
      complete: false 
    });
    this.displayTodos();
  },
 changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
 deleteTodo: function(position) {
    this.todos.splice(position, 1);
   this.displayTodos();
  },
 toggleCompleted: function (position) {
  var todo = this.todos[position];
  todo.completed = !todo.completed;
  this.displayTodos();
  },
 toggleAll: function (){
   var totalTodos = this.todos.length;
   var completedTodos = 0;
   
   //Get number of completed todos.
   for (var i = 0; i < totalTodos; i++){
     if (this.todos[i].completed === true){
   completedTodos++;
    }   
  }
  
  //Case 1: If everything's true, make everything false 
 if (completedTodos === totalTodos){
    //Make everythign false. 
    for (i = 0; i <totalTodos; i++) {
      this.todos[i].completed = false;
       }
       //case 2: Otherwise, make everything true
     } else {
       for (i = 0; i <totalTodos; i++) {
         this.todos[i].completed = true;
       }
     }
     this.displayTodos();
   }
 };

 var displayTodosButton = document.getElementById('displayTodosButton');
 var toggleAllButton = document.getElementById('toggleAllButton');
 displayTodosButton.addEventListener('click', function(){
   todoList.displayTodos();
 });
  
toggleAllButton.addEventListener('click', function(){
  todoList.toggleAll();
});
 
 
 
 
 
 
 
 
 
 
 
 

// var todos = ['item 1', 'item 2', 'item 3'];

// //It should have a function to display todos
// function displayTodos() {
//   console.log('My todos:', todos);
//  }

// //It should have a function to add todos
//  function addTodo(todo) { //addTodo('new Todo') << this value will be pushed to array
//   todos.push(todo);
//   displayTodos(); // this will allow you to see change imediately 
//  }
 
//  //It should have a function to change todos
// function changeTodo(position, newValue){
//   todos[position] = newValue;
//   displayTodos();
//  }
 
//  //It should have a function to delete todos
//  function deleteTodo(position) {
//   todos.splice(position, 1);
//   displayTodos();
//  }
 
 
