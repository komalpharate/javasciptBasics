let k =77777777777;

function outest(){
    var a = 20;
    function outer(b){
        var c = 400;
        let k = 11111111;

        function inner(){
            console.log(a);
            console.log(b);
            console.log(c);
            console.log("k:", k);     //11111111
        }
        return inner;
    }
    return outer;
}
// outest()("komal")();

//constructor function = its like a class
function makeCounter(){
    var count=0, unused =5;
    console.log("Im called");
    this.incrementCount = function(){
        count++;
    }
    this.decrementCount = function(){
        count--;
    }
    this.printCount = function(){
        console.log("The value of the counter is : ", count);
    }
}
//the following cant be done 
//var counter1 = makeCounter();
//counter1.incrementCount(); //TypeError: Cannot read properties of undefined (reading 'incrementCount')

const counter1 = new makeCounter();
counter1.incrementCount();
counter1.incrementCount();
counter1.decrementCount();
console.log("The value of the counter outside : ", counter1.count); //undefined
counter1.printCount(); //gives count