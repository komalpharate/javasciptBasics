const flag1 = false;
const flag2 = false;
const flag3 = false;

const p1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        if(flag1)
            resolve('P1 set result value = success');
        else
            reject('P1 set reason = error');
    }, 3000)
})

const p2 = new Promise((resolve, reject)=>{
    setTimeout(function(){
        if(flag2)
            resolve('P2 set result value = success');
        else
            reject('P2 set reason = error');
    },1000)
})
const p3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        if(flag3)
            resolve('P3 set result value = success');
        else
            reject('P2 set reason = error');
    }, 2000);
})

// //all success = success, one failed = all failed
// Promise.all([p1,p2,p3])
// .then((resultfromALL)=>{
//     console.log("\n Result of promise.all()", resultfromALL);
// })
// .catch((resultfromALL)=>{
//     console.log("\n Result of promise.all() on failure of one promise:");
//     console.log(resultfromALL);
// })

// //results from all given in array
// Promise.allSettled([p1,p2,p3])
// .then((resultfromALL)=>{
//     console.log("\n Result of promise.allSettled()", resultfromALL);
// })
// .catch((resultfromALL)=>{
//     console.log("\n Result of promise.allSettled() on failure of one promise:");
//     console.log(resultfromALL);
// })

// //race s or f
// Promise.race([p1,p2,p3])
// .then((resultfromALL)=>{
//     console.log("\n Result of promise.race()", resultfromALL);
// })
// .catch((resultfromALL)=>{
//     console.log("\n Result of promise.race() on failure of one promise:");
//     console.log(resultfromALL);
// })

//any success 
Promise.any([p1,p2,p3])
.then((resultfromALL)=>{
    console.log("\n Result of promise.any()", resultfromALL);
})
.catch((resultfromALL)=>{
    console.log("\n Result of promise.any() on failure of one promise:");
    // console.log(resultfromALL); this also prints the aggregate errors on terminal, but
    //for browser do .errors
    console.log(resultfromALL.errors);
})

function tryFinally(){
    const myPromise = new Promise((resolve, reject)=> {
       setTimeout(function(){
        resolve("resolved promise in FINALLY");
       },6000);
    })
    return myPromise;
}

tryFinally().then((resultfromALL)=>{
    console.log("\n Finally then:", resultfromALL);
})
.catch((resultfromALL)=>{
    console.log("\n Finally catched");
    console.log(resultfromALL);
})
.finally(()=>{
    console.log('Promise is settled, regardless of its outcome');
})
/*
Output :

 Result of promise.race() P2 set result value = success

 Result of promise.any() P2 set result value = success

 Result of promise.all() [
  'P1 set result value = success',
  'P2 set result value = success',
  'P3 set result value = success'
]

 Result of promise.allSettled() [
  { status: 'fulfilled', value: 'P1 set result value = success' },
  { status: 'fulfilled', value: 'P2 set result value = success' },
  { status: 'fulfilled', value: 'P3 set result value = success' }
]
*/