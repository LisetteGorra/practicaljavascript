 Breaking down a for lopp
 i = 0               // initialize
 Say "hey" if i < 3    //condition
 Increase i by 1     // final-expression
 
 0 "hey"
 1 "hey"
 2 "hey"
 3
 
 for (initialization, condition, final-expression) {
     console.log("hey");
 }
  for (var i = 0; i < 3; i++) {
     console.log("hey");
 }
 

 // i = i+1
 // i++
 --------------
 
 For LOOPS and arrays
 
 for (var i = 0; i < 3; i++) {
     console.log("hey");
 }
 
  for (var i = 0; i < 3; i++) {
console.log(testArray[i]);        (i is a variable )
 } 
 
 for (var i = 0; i < testArray.length; i++) {
console.log(testArray[i]);            //this code makes the condition more dynamic
 }                                    // by using .length
 
 ------------------------------------
 v5 requirements
 
 .displayTodos should show .todoText
 
 console.log('My Todos:' );
    for (var i =0; i < this.todos.length; i++) {
      console.log(this.todos[i].todoText);
     }
 
 .displayTodos should tell you if .todos is empty 
 
 breaking down the for loop
 
 //if this.todos.length is tripple === equal to 0 
 
 //else
 //print todos as normal

 if (this.todos.length === 0){
    console.log('your todo list is empty!'); 
 }  else { 
    
     
   }
 };

if (condition) {
    // some code that runs if condition is true 
} else {
    // code that runs if condition is false
}
 .displayTodos should show .completed
 
 // check if completed is true 
 if ( this.todos[i].completed === true){
 console.log('(x)', this.todos[i].todoText);
 // else   
 } else {
    console.log('()', this.todos[i].todoText);              // print with (x)
 }
 
 
 // print with ()
 
 now this will show if the things in the array are completed 
 items in array can be completed and undone by running code again 
 
 
 