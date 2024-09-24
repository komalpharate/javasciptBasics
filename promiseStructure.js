const myPromise = new Promise((resolve, reject) => {
    // Perform some asynchronous operation
    const success = true; // Replace with actual condition

    if (success) {
        //sets promise state to fulfilled and sets the result value = 'Operation succeeded'
        resolve('Operation succeeded'); 
        console.log("******CONTROL here after resolve:Hence resolve doesnt return anything or doesnt end the execution of the promise");
    } else {
        //sets promise state to rejected and sets the result value = 'Operation failed'
        reject('Operation failed');
    }
});
//consuming a promise
myPromise
    .then(result => {
        console.log(typeof (result)); // Output: Operation succeeded
        console.log("Result : ",result);
    })
    .catch(error => {
        console.error(error); // Output: Operation failed (if success is false)
    });

const anotherAsyncOperation = function () {
    const another = new Promise((resolve, reject) => {
        if(true)
        {
            resolve('Another operation successful');
        }else{
            reject('Another Operation Failed');
        } 
    })
    return another;
}
//chaining a promise
myPromise
    .then(result => {
        console.log(result);
        return anotherAsyncOperation(); // Return another promise
    })
    .then(resultFromAnotherOperation => {
        console.log(resultFromAnotherOperation);
    })
    .catch(error => {
        console.error(error);
    });

