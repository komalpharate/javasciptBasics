//var let const 
//: var has function scope
//: let and const has block scope

//scope();
function scope(){
    {
        var x = 10;
        let y = 20;
        const z = 30;
    }
    console.log("Value of x ", x);      //No error 
   
    console.log("Value of y ", y);  //ReferenceError: y is not defined   
    console.log("Value of z ", z); //ReferenceError: y is not defined
}

//Remove commented code to test respective properties
otherProperties();
function otherProperties(){
    var x = 1;
    let y = 2;
    const z = 3;

    //2.reassignment : possible for var and let , NOT for const
    x = 10;
    y = 20;
    //z = 30; //TypeError: Assignment to constant variable.

    //3. hoisting
    //var : hoisted + intitialized `undefined`
    console.log("varHoisted", varHoisted);  //varHoisted
    {
        var varHoisted = 1000;
    }
    //let and const: hoisted + not initialized => TDZ Temporal Dead Zone

    //console.log("letHoisted ", letHoisted); //ReferenceError: Cannot access 'letHoisted' before initialization
    //console.log("constHoisted ", constHoisted); //ReferenceError: Cannot access 'constHoisted' before initialization
    let letHoisted = 2000;
    const constHoisted = 3000;

    //4. Redclaration
    var x = 50;
    //let y= 70;  //SyntaxError: Identifier 'y' has already been declared
    //const z = 80; //SyntaxError: Identifier 'z' has already been declared
}

// Const in objects :  its properties can still be modified
const obj = { name: 'Potato' };
obj.name = 'Chips'; // This is allowed
console.log(obj.name); // 'Chips'