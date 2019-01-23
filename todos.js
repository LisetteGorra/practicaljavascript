var todoList = {
  todos: [],
  displayTodos: function() {
       if (this.todos.length === 0){
    console.log('your todo list is empty!'); 
 }  else {
    console.log('My Todos:' );
    for (var i =0; i < this.todos.length; i++) {
      if ( this.todos[i].completed === true){
     console.log('(x)', this.todos[i].todoText);
     } else {
     console.log('()', this.todos[i].todoText);
     
        }
      }
    }
  },
   
  addTodo: funciton(todoText) { 
    this.todos.push({
      todoText: todoText.
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
  }

};

















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
 
 
