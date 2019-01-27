V9 REQUIREMENTS

- There should be an li element for every todo 

1st you must insert li into the (DOM) 

var todoLi = document.createElement('li');

todoLi
result:
<li></li>

var todosUl = document.querySelector('ul');

todosUl
returns:
<ul>

todosUl.appendChild(todoLi);

creates a bullet on page (object representation on html)

    </ul>

(script)

  // takes todos array and displays it to the screen
 // takes todos array and displays it to the screen
 
 var view = {
   displayTodos: function(){  // will replace the var todoList function from top 
   for (var i = 0; i < todoList.todos.length; i++) {
      var todosUl = document.querySelector('ul');
      var todoLi = document.createElement('li');
      todosUl.appendChild(todoLi);
     }
   }
 };
 
 change code to run forloop and clear like this:
 
 var view = {
   displayTodos: function(){ 
   var todosUl = document.querySelector('ul');  
   todosUl.innerHTML = '';
   for (var i = 0; i < todoList.todos.length; i++) {
     
      var todoLi = document.createElement('li');
      todosUl.appendChild(todoLi);
     }
   }
 };
 

 then type into DOM 
 
 view.displayTodos();
 result: bullet on object representation page 
 


- Each li element should contain .todoText

 var view = {
   displayTodos: function(){ 
   var todosUl = document.querySelector('ul');  
   todosUl.innerHTML = '';
   for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      todoLi.textContent = todoList.todos[i].todoText;
      todosUl.appendChild(todoLi);
     }
   }
 };
 




- Each li element should show .completed

      // '(x) todoText'
      // var todoTextWithCompletion = '';
      //if (todo.completed=== true)
        // (x) todoText
      // else
        // ()todoText
      //todoLi.textContent = todoTextWithCompletion


 var view = {
   displayTodos: function(){ 
   var todosUl = document.querySelector('ul');  
   todosUl.innerHTML = '';
   for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = ""; // takes the place of  todoTextWithCompletion = '(x) ' + todo.todoText;
      
     if(todo.completed === true) {
       todoTextWithCompletion = '(x) ' + todo.todoText;
     } else {
       todoTextWithCompletion = '( ) ' + todo.todoText;
     }
     
     todoLi.textContent = todoTextWithCompletion;
     todosUl.appendChild(todoLi);
     }
   }
 };
 
 
add something, then to display in console type view.displayTodos();





---------------------------------------------------

ESCAPING THE CONSOLE

add view.displayTodos(); 

at the end of every function under hadlers var except the display function becasue that will be removed

now you can open html and delete display todos button
      <button onclick="handlers.displayTodos()">Display Todos</button>
then delete display todos in handler var (script)
  displayTodos: function(){
    todoList.displayTodos();
  },
  
  then delete   this.displayTodos(); under toggle functions and todo functions
  
  finally delete code for display todos function 
  
   displayTodos: function() {
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