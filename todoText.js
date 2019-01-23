var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos', this.todos);
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
  }
};
toggleCompleted: function (position) {
  var todo = this.todos[position];
  todo.completed = !todo.completed;
  this.displayTodos();
}
