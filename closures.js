//Closure
function makeCounter() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
}
//counter1 is assigned the returned function, 
//which includes its own independent count variable.
// //the function isn't called, only asssigned
// const counter1 = makeCounter();
// console.log(counter1()); // 1
// console.log(counter1()); // 2

// const counter2 = makeCounter();
// console.log(counter2()); // 1
// console.log(counter2()); // 2

/*
function x(){
    let x = 100;
    function y(){
        console.log(x);
    }
    y();
}
x();
y(); //Referrence error : y is not defined
*/

function outer(){
    let x = 100;
    console.log("OUter function x", 100);
    function y(){
        console.log("We are in y function");
        console.log("           and printing value of x:",x);  

        function abc(){
            x = x + 200;
            console.log("We are in abc function");
            console.log("       and printing value of x:",x);
            return "done with abc!!";
        }
        return abc;
    }
    return y;
}

// const closure_y = outer();
// const closure_abc = closure_y();    //100
// console.log(closure_abc());     //300
// closure_y();    //300

// outer(); //100 // this is new call and new execution context is called


//setTimeout function is executed after the interval so 
//whatever is the code wont do anything unless the timer sets its on 
//seTimeout functions using let
function closureSetTimeout(){
    for(let i = 1; i<=5; i++){
        setTimeout(() => {
            console.log(i);   //1 2 3 4 5     
        }, i * 1000);
        console.log("Namaste Javascript");
    }
}
//closureSetTimeout();

//seTimeout functions using var
function closureSetTimeout2(){
    for(var i = 1; i<=5; i++){
        setTimeout(() => {
            console.log(i);   //6 6 6 6 6     
        }, i * 1000);
        console.log("Namaste Javascript");
    }
}
// closureSetTimeout2();

//seTimeout functions using let
function useVarinSettimeout(){
    for(var i = 1; i<= 5; i++){
        function closureSet(i){
            setTimeout(() => {
                console.log(i);   //1 2 3 4 5     
            }, i * 1000);
        }
        console.log("Namaste Javascript");
        closureSet(i);
    }
}
useVarinSettimeout();