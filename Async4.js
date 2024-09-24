/**
 * https://api.github.com/
 */
const API_URL = 'https://kok';

//async functions returns a promise
async function handle() {
    try{
        const urlData = await fetch(API_URL);
        const jsonValue = await urlData.json();
        console.log(jsonValue);    
    }catch(err){
        console.log(err);
    }
    
    //fetch('url').then(res=> res.json()).then((res)=>console.log(res));
}
handle();
//or older way to handle errors/ as async function returns a promise .catch method is available
// handle().catch((err)=>console.log(err));