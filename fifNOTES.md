FUNCTION IN A FUNCTION 

- runWithDebugger 

function logTenNumbers () {
    for (var i = 0; i <0; i++) {
        console.log(i);
    }
}

result = prints 0-9

debugger;
logTenNumbers();

this will bring you into debugger, step over 1st line and inspect logTenNumbers

the shortcut is...

runWithDebugger(ourFunction);

// 1st run debugger 
// then run ourFunction();

replaces //debugger //logTenNumbers

the function you really want is...

function runWithDebugger(ourFunction) {
    debugger;
    ourFunction();
}

this will run debugger 1st and the function next for us
runWithDebugger(function logTenNumbers() {
    for var i = 0; i < 10; i++) {
        console.log(i);
    }
});

we made a function that enhances another function 

functions can be passed into other functions
------------------------------------------------------------
- setTimeOut() .. creating an "alarm clock"

setTimeOut(function() {
    console.log ('wake up liz!');
}, 5000)

setTimeOut enhances the behavior of our function by turning it into a timer/alarmclock

functions can be passed into other functions

--------------------------------------------------------------

- forEach

var students = ['john', 'jen', 'liz'];

function logName(name) {
    console.log(name);
}

logName(students[0])
result:john

logName(students[1])
result:jenny

this is one way to use the function... another way is...

for (var i = 0; i <students.length; i++) {
    logName(students[i]);
}

this is an improvement on the code used above...but there is a shorter way ... 

students.forEach(logName)

result:
john
jen
liz

or you can use ...

students.forEach(function logName(name) {
    console.log(name);
})

result:
john
jen
liz

you can even make a shorter code and use an anonymous function

students.forEach(function(name){
    console.log(name);
})

and the result will still be the 3 names 

forEach is handling the forLoop for us. 



creating your own forEach


function forEach(myArray, myFunction) {
    for (var i = 0; i < myArray.length; i++) {
        myFunction(myArray[i]);
    }
}

this will work almost exactly the same as the built in forEach

in the console you will type 


forEach(students, function(student) {
    console.log(student);
})
 or 
 forEach(students, function(logName) {
    console.log(student);
})

this last example is a little more complicated than the others

 ---------------------------------------------------
addEventListener

tutorialsElement.addEventListener('click', function(){
    console.log('The tutorials element was clicked');
});

this is another example of a function in a function that gets enhanced

------------------------------------------------------

Buzzwords!! Higher order functions and callback functions 

higher order functions are :
- Functions that accept other functions like runWithDebugger, setTimeOut, forEach, and addEventListener
- Enhance the behavior of other functions 

CallBack functions:
- The functions that are passed into higher order functions 
