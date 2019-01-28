v10 REQUIREMENTS

-------------------------------------------------
(side note)
function multiplyTwoNumbers(a, b) {
    var result = a * b;
    return result; // will give us back something besides "undefined"
}

var theProductOf2And10 = multiplyTwoNumbers(2, 10);
---------------------------------------------------

V1O REQUIREMENTS

- There should be a way to create delete buttons

(script)
 createDeleteButton: function(){
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  }
};
 and call it in the console using:
 view.createDeleteButton()

- There should be a delete button for each todo 
 

todoLi.appendChild(this.createDeleteButton());

added to var view in the displayTodos function, at the bottom between the li and ul code (child codes)

- Each li should have an id that has the todo position 

todoLi.id = i; 

in display todos function
before the il and ul code


- Delete buttons should have access to the todo id 

(script)
var todosUl = document.querySelector('ul');

todosUl.addEventListener('click', function() {
console.log(event.target.parentNode.id);
});

under all code



- Clicking delete should update todoList.todos and the DOM

remove code from deleteTodo function 

    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
 
 since var deleteTodoPositionInput isn't needed neither is 
 
     deleteTodoPositionInput.value = '';
     
     at the bottom of page create this code 
     
      //Get the element that was clicked on 
  var elementClicked = event.target;
  
  //check if element clicked is a delete button 
  if(elementClicked.className === 'deleteButton') {
  // run handlers.deleteTodo
  }
});


modify the rest of your delete todo function like so 

  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  
  add a position to the handlers code...
  parseInt(elementClicked.parentNode.id);
  
  should look like this...
  
   if(elementClicked.className === 'deleteButton') {
  handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
  
  
  next, we'd like to organize this code and put it into the view method
  
  create the function ...
  
    setUpEventListeners: function() {

then paste the code into it like so...

next you will need a code to call the function at the end

view.setUpEventListeners();
  
  you can add a single eventListener on the enclosing code 
  
  -------------------------------------------------
  CLEANUP AND REVIEW 
  
  - CLEANUP 
  

we no longer need the delete button displayed on the TODO List page so we can delete code from our HTML 

<div>
      <button onclick="handlers.deleteTodo()">Delete</button>
      <input id="deleteTodoPositionInput" type="number">
    </div>   
    
    bye! 
    
    
 - Review 

We created a delete button with a function, and practiced with return statement
added text content for delete and the method to return the delete button 
we appended delete button to li 

we set up a single event listener on our UL 
better than setting up on every li that is repetetive and tedious 

event delegation - use it when you have multiple items in a list and all items have similar eventListeners, add the code to the enclosing element that contains all the items vs adding event listener to every item individualy

what is DOM event delegation?

It's the mechanism of responding to ui-events via a single common parent rather than each child, through the magic of event "bubbling" (aka event propagation)

