/*shadowing and block scope
x = 130 shadows x=300 as its global scoped initialization
*/

var x = 300;
let a =200;
const b = 420;
{
    var x =130; //global scope
    let a = 10; //block scope
    const b = 20; //block scope
    console.log(a); // 10
    console.log(b); // 20
}
console.log("Outside x: ",x);
console.log(a); //200 OR if not global,ReferenceError: a is not defined 
console.log(b); //420 OR if not global,ReferenceError: b is not defined

let y = 200;
{
    //var y = 400; //SyntaxError: Identifier 'y' has already been declared
}
// same in function is not a problem
function yess(){
    var y = 60; // this is okay
}
