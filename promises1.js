const cartDetails = ['shoes', 'shirts', 'pants'];

//using callback = callback hell, pyramid doom: code grows horizontally and not vertically
//may call it twice/thrice also in callback queue, we never know when the callstack will execute it

createOrder(cart, function (orderId){
    
    proceedToPayment(orderId, function(){

        showOrderSummary(orderId, function(){

            updateWalletBalance();
        });
    }); 
});

//using promises
const promise = createOrder(cart); //api createorder will return object JSON

promise.then(function(orderId){
    proceedToPayment(orderId);
});

//OR
createOrder(cart).then(function(orderId){
    proceedToPayment(orderId);
});
