//api call
const GITHUB_API = "https://api.github.com/users/akshaymarch7";
const userInfo = fetch(GITHUB_API);

//callback function is attached to promise and not passed as an argument
//can be resolved only once z
userInfo.then(function(userInfo){
    console.log("User Information: ", userInfo); //data is printed
});
console.log("Here is the userInfo: ", userInfo); //pending

