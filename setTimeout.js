//Issue with the setTimeout
console.log("start of the program");

setTimeout(function(){
    console.log("Callback function from the setTimeout");
}, 1000);

console.log("mid of program");

let startDate = new Date().getTime();
let endDate = startDate;

//Blocking the main thread
// while ( endDate <=startDate  ){
//         endDate = new Date().getDate();
// //     // if (endDate == startDate + 5000)
// //     //     console.log("5 seconds finished: Ideally setTimeout callback function should get executed now!");
// }
console.log("End of the program");


  