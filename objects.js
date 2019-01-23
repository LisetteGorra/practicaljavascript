function displayTodos() {
  console.log('My todos:', todos);
 }

function addTodo(todo) { //addTodo('new Todo') << this value will be pushed to array
  todos.push(todo);
  displayTodos(); // this will allow you to see change imediately 
 }
 function changeTodo(position, newValue){
  todos[position] = newValue;
  displayTodos();
 }
  function deleteTodo(position) {
   todos.splice(position, 1);
   displayTodos();
 }
 
// var myComputer = {
//   operatingSystem: 'mac',     // these lines are called properties followed by a value
//   screenSize: '15 inches', 
//   purchaseYear: 2014,
// };

// myComputer.operatingSystem; // will return "mac"

// var lisette = {  // this code will return the name only: 'Lisette'
// 	name: 'Lisette',
// 	sayName: function() {
// 	console.log(this.name);
//   }
// }

