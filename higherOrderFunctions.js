//x = callback function ; y = higher order function
function x(){
    console.log("Hello we are in callback function x");
}
function y(a){
    console.log("We are in y function");
    x(); 
}

//functional programming
//write a program to get area, circumferene and diameter of a circle 

radius = [1, 3, 5, 7]
const area = function (r){
    return Math.PI * r * r;
};
const circumferene = function (r){
    return 2 * Math.PI * r;
}
const diameter = function(r){
    return 2 * r;
}
const calculate = function(radius, logic){
    const output = [];
    for (let i = 0; i< radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}
console.log(calculate(radius, area));
console.log(calculate(radius, circumferene));
console.log(calculate(radius, diameter));

//Map function 
// array.map(callback(currentValue, index, array), thisArg)
// thisArg points to the Array
console.log(radius.map(area));
console.log(radius.map(circumferene));
console.log(radius.map(diameter));

Array.prototype.calci = function (logic){
    console.log("writing a function for arrays all over the program");
    const output = [];
    for(let i = 0; i< this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
}
console.log("New method calci similar to map: ", radius.calci(area));