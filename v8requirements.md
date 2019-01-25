V8 REQUIREMENTS

- It should have working controls for .addTodo

(script)
addTodo: function(){
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value ='';
    
  }
};

(html)
    <div>
      <button onclick="handlers.addTodo()">Add</button>
      <input id ="addTodoTextInput" type="text">
    </div>
 


- It should have working controls for .changeTodo

(script)
changeTodo: function(){
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    
  }
};
 
 (html)
 <div>
      <button onclick ="handlers.changeTodo()">Change Todo</button>  
      <input id="changeTodoPositionInput" type="number">
      <input id="changeTodoTextInput" type="text">
 </div

- It should have working controls for .deleteTodo

(script)
 deleteTodo: function(){
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value ='';
    
  }
};
 (html)
 <div>
      <button onclick="handlers.deleteTodo()">Delete</button>
      <input id="deleteTodoPositionInput" type="number">
 </div>

- It should have working controls for .toggleCompleted

(script)
toggleCompleted: function(){
  var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
  todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
  toggleCompletedPositionInput.value = '';
 }
};
 (html)
 <div>
      <button onclick="handlers.toggleCompleted()">Toggle Completed</button>
      <input id="toggleCompletedPositionInput" type="number">
 </div>

-------------------------------------------------
REVIEW 

1. Affectively use inputs and get data from users to succesfully use it inside of our application 

2. used value as number on DOM elements 

3. used divs to group elements together, putting them on their own line (block elements)

4. used objects in javascript to organize our code, grouped code related to user interface into 1 object makes it cleaner

5. used javascript to modify things inside page, clearing page with code after input is entered 