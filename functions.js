var x=1;
a();
b();
console.log(x);
function a(){
    var x = 10;
    console.log(x); //js looks for the x in local execution context/
    //local function memory and print x=10
}
function b(){
    var x = 200;
    console.log(x);//js looks for the x in local execution context and print x=10
}

// Example JavaScript code
function sayHello() {
    alert("Hello, World!");
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
}
