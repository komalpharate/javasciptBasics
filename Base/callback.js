//callback function

//JS is synchronous and single threaded

//blocking the main thread

//power of callbacks

//deep aboutevent listeners

//closures demo with event listeners

//scope demo with event listeners

//garbagecollection and remove eventListeners

//callback functions
setTimeout(function(){
    console.log("Timer finished");
}, 5000)

function x (y){
    console.log("We are in x");
    y();
};

x(function y(){
    console.log("we are in function Y");
});
//=========================================
/*
let count = 0;
document.getElementById("clickMe").addEventListener("click", function xyz(){
    console.log("Button is clicked", ++count);
});

*/
//closure is formed to hide the data from outside
function attachEventlistners(){
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function xyz(){
        console.log("Button is clicked", ++count);
    });
}

//synchronous callbacks 
function xcallme(){
    console.log("call back from parent : Here am I in X??");
}
function parent(name, callback){
    console.log("Parent called by", name);
    callback();
}
parent("Komal", xcallme);

//asynchronous callbacks
function fetchData(name, callback){
    console.log("We are in fetch data "+name);
    setTimeout(function(){
        console.log("in timeout function: timer finished");
        callback();
    }, 2000);
}
function workDone(){
    console.log("Work is done: Im called from callback function");
}
fetchData("Nakul", workDone);

//Error handling 
function errorHandler(onSuccess, onFailure){
    let flag = true;
    if (flag)
        onSuccess();
    else 
        onFailure();
}
function onSuccess(){
    console.log("We are inside success function");
}
function onFailure(){
    console.log("We are in failure function");
}

