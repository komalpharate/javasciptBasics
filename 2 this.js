"use strict"
//must be writen here at start only

// this in global space
console.log("This in global space:", this);

// this inside a function which is called in the global scope
// 1. points to window object in non-strict
function x() {
    console.log("This inside a function: ", this);
}
x();

//2. points to window object in strict mode
//"use strict" write at the top
function y() {
    console.log("This inside a function in strict mode: ", this);    //undefined
}
y();

//this value depends on how this is called (window) with strict
window.x();     //window
x();            //undefined

//this inside a object's method
const obj = {
    a: 10,
    x: function () {
        console.log(this);  //points to obj
        console.log("value a: ", this.a);   //10
    }
}
obj.x();    //points to obj   

//call apply bind methods (sharing methods)
const obj2 = {
    a: 30,
}
obj.x.call(obj2);    //points to obj2    //prints value of a 30

//this inside arrow function
//points to the this of enclosing lexical environment : here its window
const obj4 = {
    a: 40,
    z: () => {
        console.log(this);  //window 
        console.log(this.a);    //undefined
    }
}
obj4.z();           

//this inside nested arrow function: doesn't have its own this
//it points to the enclosing lexical enviroment OR the this of function z()
const obj3 = {
    a: 40,
    z: function () {
        const p = () => {
            console.log(this);      //points to object {a: 40, z: ƒ}
            console.log(this.a);    //a = 40
        };
        p();
    }
}
obj3.z();           

//this inside DOM
