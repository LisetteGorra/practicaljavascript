v7 Requirements

- There should be a "Display todos" button and a "Toggle all" button in the app.


<button>Display Todos</button>
<button>Toggle All</button>
    



- Clicking "Display todos" should run todoList.displayTodos.

// 1. We want to get access to the display todos button. 
 var displayTodosButton = document.getElementById('displayTodosButton');
 console.log(displayTodosButton);
 
 // 2. We want to ru displayTodos method when someone clicks the display 
 // todos button.
 
 displayTodosButton.addEventListener('click', function(){
   todoList.displayTodos();
 });
  


- Clicking "Toggle all" should run todoList.toggleAll.

toggleAllButton.addEventListener('click', function(){
  todoList.toggleAll();
});
 
 

---------------------------------------------------
What is the DOM 

The Document Object Model is a cross platform and 
language-independent convention for representing and 
interacting with objects in HTML, XHTML, and XML documents.  
The nodes of every document are organized in a tree structure, 
called the DOM tree.
