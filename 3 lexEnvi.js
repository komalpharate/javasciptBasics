//lexical envi. : here innerFunc has the access to the 'name' 
//which is in the lexical envi of outerFunc
function outerfun(name){
    console.log("Outer func: ", name);

    function innerFunc(){
        console.log("Inner func", name);
    }
    innerFunc();
    name = 'changed at end'
    return name;
}

console.log(outerfun('komal'));

