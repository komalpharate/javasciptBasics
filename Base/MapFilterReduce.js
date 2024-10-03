
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.toString());
//ways to use Map
//array.map(callback(currentValue, index(optional), array(optional)), thisArg(optional))
const dblfunc = function(n){
    console.log(numbers);
    return n * 2;
}
const doubled = numbers.map(dblfunc);
console.log(doubled); // [2, 4, 6, 8, 10]

//Arrow functions with Map callback functions
//(parameters) => return value
const squared = numbers.map(number => number * number);
console.log(squared); // [1, 4, 9, 16, 25]

//Filter() function
// array.filter(callback(currentValue, index, array), thisArg);
function oddvalues(num){
    return num % 2;
}
let oddsarray = numbers.filter(oddvalues);
console.log("Odd: ", oddsarray);

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even:", evenNumbers); // Output: [2, 4]

//Reduce function in arrays
// array.reduce(callback(accumulator, currentValue, index, array), initialValue);
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of all the elements:",sum); // Output: 15

//the callback function will be called for every element in the 
//array and accordingly pushed the elememt in the array
let max = numbers.reduce(function(accumulator, currentValue){
    if(accumulator < currentValue)
        accumulator = currentValue;
    return accumulator;
}, 0);
console.log("Max in the array :", max);

//Applications of Map Filter Reduce
const usersData = [
    {
      "firstName": "Emma",
      "lastName": "Johnson",
      "age": 29
    },
    {
      "firstName": "Liam",
      "lastName": "Smith",
      "age": 34
    },
    {
      "firstName": "Olivia",
      "lastName": "Brown",
      "age": 22
    },
    {
      "firstName": "Noah",
      "lastName": "Williams",
      "age": 40
    },
    {
      "firstName": "Ava",
      "lastName": "Jones",
      "age": 27
    },
    {
      "firstName": "Ethan",
      "lastName": "Miller",
      "age": 31
    },
    {
      "firstName": "Sophia",
      "lastName": "Davis",
      "age": 25
    }
  ]
  
  const fullNames = usersData.map((x) => x.firstName +" "+ x.lastName);
  console.log(fullNames);

  const ageMoreThan30 = usersData.filter((x) => x.age>30);
  console.log("Number of people with age more than 30: ",ageMoreThan30.length);

  const alternate = usersData.reduce((accumulator, currentValue)=>{
    if(currentValue.age > 30)
        accumulator++;
    return accumulator;
  }, 0);
  console.log("Number of people with age more than 30: ",alternate);

  