UNDERSTANDING *this

Case 1: In a regular function (or if you're not in a function at all)
this points to window. This is the default case.

function logThis() {
  console.log(this);
}

logThis(); // window

// In strict mode, `this` will be `undefined` instead of `window`. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

-------------------------------------------------------------
Case 2: When a function is called as a method, this points to the object that's on the left side of the dot 

/*
 * You can also think of this as the "left of the dot" rule. 
 * For example, in myObject.myMethod(), `this` will be myObject
 * because myObject is to the left of the dot.
 *
 * Of course, if you're using this syntax myObject['myMethod'](),
 * technically it would be the "left of the dot or bracket" rule,
 * but that sounds clumsy and generally terrible.
 *
 * If you have multiple dots, the relevant dot is the one closest 
 * to the method call. For example, if you have one.two.hi();
 * `this` inside of hi will be two.
 */

var myObject = {
  myMethod: function() {
    console.log(this);
  }
};

myObject.myMethod(); // myObject

---------------------------------------------------------

Case 3: In a function that's being called as a constructor, this points to the object
that the cunstructor is creating.

function Person(name) {
  this.name = name;
}

var gordon = new Person('liz');
console.log(gordon); // {name: 'liz'}

---------------------------------------------------------
Case 4: When you explicitly set the value of this manually using bind, apply, or call

function logThis() {
  console.log(this);
}

var explicitlySetLogThis = logThis.bind({name: 'liz'});

explicitlySetLogThis(); // {name: 'liz'}

// Note that a function returned from .bind (like `boundOnce` below),
// cannot be bound to a different `this` value ever again.
// In other words, functions can only be bound once.
var boundOnce = logThis.bind({name: 'The first time is forever'});

// These attempts to change `this` are futile.
boundOnce.bind({name: 'why even try?'})();
boundOnce.apply({name: 'why even try?'});
boundOnce.call({name: 'why even try?'});

//Method on functions 
// Returns a copy of the function where 'this'
// is set to the first argument passed into .bind().

var explicitlySetLogThis = logThis.bind({name: 'liz'});



below are the difference between apply and call and how they are used to get the same return 


logThisWithArguments.call({name: 'liz'}, 'hi', 'liz');
logThisWithArguments.apply({name: 'liz'}, ['hi', 'liz']);

--------------------------------------------------

Case 5: When you're in a callback function
In a callback function, apply the above rules methodically 

function outerFunction(callback) {
  callback();
}

function logThis() {
  console.log(this);
}

/*
 * Case 1: The regular old default case.
 */
 
outerFunction(logThis); // window

/*
 * Case 2: Call the callback as a method
 * (You'll probably NEVER see this, but I guess it's possible.)
 */
 
function callAsMethod(callback) {
  var weirdObject = {
    name: "Don't do this in real life"
  };
  
  weirdObject.callback = callback;
  weirdObject.callback();
}

callAsMethod(logThis); // `weirdObject` will get logged to the console

/*
 * Case 3: Calling the callback as a constructor. 
 * (You'll also probably never see this. But in case you do...)
 */
 
function callAsConstructor(callback) {
  new callback();
}

callAsConstructor(logThis); // the new object created by logThis will be logged to the console

/*
 * Case 4: Explicitly setting `this`.
 */
 
function callAndBindToLiz(callback) {
  var boundCallback = callback.bind({name: 'Liz'});
  boundCallback();
}

callAndBindToGordon(logThis); // {name: 'Gordon'}

// In a twist, we give `callAndBindToLiz` a function that's already been bound.
var boundOnce = logThis.bind({name: 'The first time is forever'});
callAndBindToLiz(boundOnce); // {name: 'The first time is forever'}
