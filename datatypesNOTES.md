JavaScript Data  OVERVIEW

Objects (can be as complex as you want)
 - {} // todoList, arrays, functions

Primitives (building blocks)
 - String       // 'Look at this string!'
 - Number       // 1, 2, 3, 4 ...
 - Boolean      // true, false
 - Undefined    // value that hasn't been set
 - Null         // 'Nothing'
 
-------------------------------------------------------

Comparisons with primitive data types 

- STRING

'lisette' === 'gordan';
true 

'lisette 1' === 'gordon';
false

- NUMBER 

1 === 1
true 

1 === 2 
false 

100 === 100 
true 

- BOOLEAN 

true === true 
true 

true === false 
false 

false === false 
true 

- UNDEFINED and NULL 
 

undefined === undefined 
true 

null === null  
true 

Works just like math!

----------------------------------------------------

Comparisons with objects

- Number

{} === {}  // looks the same but is false (wierd behavior)
false      // this happens because ... they are 2 seperate objects
           // they look the same but are in fact seperate 
[1, 2, 3] === [1, 2, 3]   // each object has a memory address 
false           // like 2 identical homes would have seperate addresses

- JavaScript is comparing memory addresses not the actual objects 

- the only way to get a true outcome is to create a var 
example:

var houseA = {};

houseA === houseA
true 

- Review 

Working with Primitives (values) and Objects (references) side by side

One works with memory addresses and the other works with values

----------------------------------------------------------------
 
How are primitives and objects stored inside of variables?

example 1:

var myPrimitive = 10;   // result 10
var myObject = {name: 'Lisette'};   // result Memory address 1
 
example 2:

var myHouse = {color: 'blue'};
myhouse.color = 'red';
color = 'red';   // this is a seperate code 

myHouse.color = // ?

result = blue

example 3:

var myHouse1 = {color: 'blue'};
var myHouse2 = myHouse1;
myHouse2.color = 'red';

myHouse1.color = // ?
myHouse2.color = // ?

answer: 
myHouse1.color = 'red'  
myHouse2.color = 'red'

example 4:

var myHouse1 = {color: 'blue'};
var myHouse2 = {color: 'blue'};
myHouse2.color = 'red';

myHouse1.color = // ?
myHouse2.color = // ?

answer:
myHouse1.color = 'blue'
myHouse2.color = 'red'

--------------------------------------------