v6 requirements 

.toggleAll: If everything's true, make everything false 
toggleAll: function (){
   var totalTodos = this.todos.length;
   var completedTodos = 0;
   
   //Get number of completed todos.
   for (var i = 0; i < totalTodos; i++){
     if (this.todos[i].completed === true){
   completedTodos++;
    }   
  }
  
 

.toggleAll: Otherwise, make everything true.

 //Case 1: If everything's true, make everything false 
 if (completedTodos === totalTodos){
    //Make everythign false. 
    for (var i = 0; i <totalTodos; i++) {
      this.todos[i].completed = false;
       }
     }
     this.displayTodos();
   }
 };
 }


------------------------------------------------