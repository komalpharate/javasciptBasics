/**
 * What is async ?
 * What is Await ?
 * How Async await works behind the scenes?
 * Examples of using async/await
 * Error Handling
 * Interviews
 * Async await vs Promises.then/ .catch
 */

//always returns a promise
async function getData() {
    return "Async and await";   //returns a promise
}
const callname = getData();     //callname is a promise
console.log(callname);

callname.then(res => console.log(res));

