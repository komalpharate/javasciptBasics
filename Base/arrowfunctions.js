//syntax
const functionName = (parameters) => {
    // function body
};

// Traditional function expression
const add = function(a, b) {
    return a + b;
};

//a.
const addarrow = (a, b) => a + b;

//b.implicit return
// Single expression (implicit return)
const square = x => x * x;

// Multiple statements (explicit return)
const square2 = x => {
    const result = x * x;
    return result;
};
//c. No 'this' binding
function Counter() {
    this.count = 0;

    setInterval(() => {
        this.count++; // 'this' refers to the Counter instance
        console.log(this.count);
    }, 1000);
}
new Counter();

const greet = () => 'Hello, World!';
greet();

//`arguments` objects  
function regularFunction() {
    console.log(arguments); // works
  }
  
const arrowFunction = () => {
    console.log(arguments); // ReferenceError: arguments is not defined
};
  