//async : used to handle promises
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('==========> Resolved first promise');
    }, 3000);
})    

const mySecondPr = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('==========> Resolved second promise')
    }, 2000);
})

//To understand execution sequence
async function handlePromise(params) {
    //using await
    const value1 = await myPromise; //1000ms
    console.log("After 1st promise call");
    console.log(value1);

    // const value2 = await myPromise;
    // console.log("After 1st promise call 2nd time");
    // console.log(value2);

    //will execute after 5000-1000 = 4000ms 
    const value3 = await mySecondPr;
    console.log("After 2nd promise call 1st time");
    console.log(value3);
}            
async function handlePromise2() {
    const value3 = await mySecondPr;
    console.log("2nd function calling 2nd promise");
    console.log(value3);    
}
handlePromise();
handlePromise2();