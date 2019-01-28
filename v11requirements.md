V 11 REQUIREMENTS 

DESTROYING FOR LOOPS

 - todoList.toggleAll should use forEach

replace old for loop with new code 

first example:

   // Get number of completed todos.
//     for (var i = 0; i < totalTodos; i++) {
//       if (this.todos[i].completed === true) {
//         completedTodos++;
//       }
//     }
    
    this.todos.forEach(function(todo) {
     if (todo.completed === true) {
       completedTodos++;
     }
    });
    
    
second example:
    
    // Case 1: If everything’s true, make everything false.
    if (completedTodos === totalTodos) {
    //   for (var i = 0; i < totalTodos; i++) {
    //     this.todos[i].completed = false;
    //   }
    this.todos.forEach(function(todo){
    todo.completed = false;
      
    });
    
    third example:
    
     // for (var i = 0; i < totalTodos; i++) {
      //   this.todos[i].completed = true;
      // }      
      this.todo.forEach(function(todo) {
        todo.completed = true;
      });
      
      
      to simplify the whole thing ... 
      //     // Case 1: If everything’s true, make everything false.
//     if (completedTodos === totalTodos) {
//       this.todos.forEach(function(todo){
//         todo.completed = false;
//       });
   
//     // Case 2: Otherwise, make everything true.
//     } else {
//       this.todo.forEach(function(todo) {
//         todo.completed = true;
//       });
//     }
    
    this.todos.forEach(function(todo){
   
    //case 1: if everythings true make everything false
      if(completedTodos === totalTodos) {
        todo.completed = false;
        // case 2: otherwise make everything true
      }else{
        todo.completed = true;
      }
    });
  }
};
 
 

 - view.displayTodos should use forEach
 

reconstruction of this code is below 


//     for (var i = 0; i < todoList.todos.length; i++) {
//       var todoLi = document.createElement('li');
//       var todo = todoList.todos[i];
//       var todoTextWithCompletion = '';

//       if (todo.completed === true) {
//         todoTextWithCompletion = '(x) ' + todo.todoText;
//       } else {
//         todoTextWithCompletion = '( ) ' + todo.todoText;
//       }
      
//       todoLi.id = i;
//       todoLi.textContent = todoTextWithCompletion;
//       todoLi.appendChild(this.createDeleteButton());
//       todosUl.appendChild(todoLi);
//     }  
//     this //refers to the view object
//     forEach(callbak, this)
    
    todoList.todos.forEach(function(todo, position){
     var todoLi = document.createElement('li');
      var todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      
      todoLi.id = position;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    
    }, this); << access the this in view function. it is placed as a second argument to access the appropriate function. it is not the same as this in the todo.List function
    
    -------------------------------------------------
    
    
     - REVIEW
     
     
We now have no forLOOPS inside if the code

we chanegd them all to forEach 

we also collapsed some code to make it shorter and cleaner 

we also accessed .this by using a second argument when a function is in a 
function you use .this to get the appropriate second argument into forEach 

passed a position in the second argument in a callback function 
