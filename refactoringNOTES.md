REFACTORING 

DEFINITION - is the process of restructoring existing 
computer code- changing the factoring - without changing 
its external behavior.
Refactoring improves nonfunctional attributes of the software.


refactoring buttons with simple code:

 <button onclick="handlers.displayTodos()">Display Todos</button>
 <button onclick="handlers.toggleAll()">Toggle All</button>


refactoring javascript for html toggle/todos buttons

var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  toggleAll:function(){
    todoList.toggleAll();
  }
};


 


