//async : used to handle promises
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('Resolved promise');
    }, 3000);
})    
async function handlePromise(params) {
    //using await
    const value = await myPromise;

    //vs using callback function
    setTimeout(() => {
        myPromise.then((res)=>console.log("In Settimeout: ",res));
    }, 1000);

    console.log("I am after await and setTimeout in the code");
    console.log(value);
}            
handlePromise();