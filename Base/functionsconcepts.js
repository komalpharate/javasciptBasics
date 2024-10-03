//function statement

//function expression

//function declaration

//anonymous function

//named fucntion expression

//difference between parameters and arguments

//first class functions

//arrow function

//------------------------------------------------------
a();
//b(); //TypeError: b is not a function

//function statement or function declaration
function a(){
    console.log("a called ");
}

//function expression
var b = function(){
    console.log("b called");
}

//Anonymous Function

//1.As Arguments to Other Functions
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function(number) {
    return number * 2;
});

console.log(doubled); // [2, 4, 6, 8, 10]

//3.Arrow functions
const squared = numbers.map(number => number * number);
console.log(squared); // [1, 4, 9, 16, 25]

//2.IIFE
(function() {
    const message = 'Hello, World!';
    console.log(message);
})();
// message is not accessible outside the IIFE

//4.Event handlers
//document.getElementById('myButton').addEventListener('click', function() {
  //  alert('Button clicked!');
//});

//5.set Timeout
setTimeout(function() {
    console.log('This message is shown after 2 seconds.');
}, 2000);

//6.functional programming
const add = a => b => a + b;
const addFive = add(5);

console.log(addFive(10)); // 15

//named fucntion expression
var a = function xyz(){
    console.log("Named function expression");
}
a();
//xyz(); //referrence error :xyz is not defined 

const fact = function factorial(n){
    if(n==1)
        return 1;
    else
        return n * factorial(n-1);
};
//console.log(factorial(5)); //Referrence error : factorial is not defined
console.log("Factorial of 5 is :", fact(5));

//First class functions

var abc = function y(param){
    param();
};
function funcparam(){
    console.log("In func parameter");
}
abc(funcparam); //passing function as parameter
//or
abc(function(){
    console.log("In func parameters 2222");
});

//return a function
function createMultiplier(multiplier) {
    return function(x) {
      return x * multiplier;
    };
}
const double = createMultiplier(2);
console.log(double(5)); // Output: 10

//storing in data structure
const operations = [
    function(x) { return x + 1; },
    function(x) { return x * 2; }
  ];
  
console.log("Adding one to 5 : ", operations[0](5)); // Output: 6
console.log("Multiplying 5 by 2 : ",operations[1](5) ); // Output: 10
  
//function properties
function myFunction() {}
myFunction.description = 'This is a custom function';
console.log(myFunction.description); // Output: This is a custom function

//closures
function makeCounter(){
    let count = 0;
    function incrementCount(){
        count++;
        console.log("Value of counter : ", count);
    }
    return incrementCount;
}
const counter1 = makeCounter();
counter1();
counter1();
