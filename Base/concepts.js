

//Lexical environment
function outer(name){
    //name='komal';
    console.log("Outer fun:", name);
    function nakul(){
        console.log("Inner fuc:",name);
    }
    name ='later';
    nakul();
    return;
}
var name = 'durva'
// outer(name);
// console.log(outer('pruthvi'));
//console.log();


//let and const
function example() {
    if (true) {
        let x = 10;
        console.log(x); // 10
    }
    console.log(x); // Error: x is not defined
}

//example();    
//Const ##############################################
function example2() {
    const y = 20;
    console.log(y); // 20
    
    // Attempting to reassign a const variable will result in an error
    y = 30; // Error: Assignment to constant variable
    
    // However, if y is an object, its properties can still be modified
    const obj = { name: 'John' };
    obj.name = 'Doe'; // This is allowed
    console.log(obj.name); // 'Doe'
}

//example2();

//Hoisting difference in var and let/const
function testHoisting() {
    console.log(a); // undefined
    var a = 1;
    
    console.log(b); // ReferenceError: Cannot access 'b' before initialization
    let b = 2;

    console.log(x); //undefined
}

//testHoisting();
