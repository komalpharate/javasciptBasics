const cartDetailsDetails = ['shoes', 'shirts', 'pants'];

//using callback = callback hell, pyramid doom: code grows horizontally and not vertically
//may call it twice/thrice also in callback queue, we never know when the callstack will execute it

createOrder(cartDetails, function (orderId) {

    proceedToPayment(orderId, function () {

        showOrderSummary(orderId, function () {

            updateWalletBalance();
        });
    });
});

//using promises
const promise = createOrder(cartDetails); //api createorder will return object JSON/promise

//now this promise is used to do further job/ consumption of promise
promise.then(function (orderId) {
    proceedToPayment(orderId);
});

//OR promise chaining : return functions
createOrder(cartDetails).then(function (orderId) {
    return proceedToPayment(orderId);
})
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo);
    })
    .then(function (paymentInfo) {
        return updateWalletBalance(paymentInfo);
    })
    .catch(error => console.error());
    

//Or using arrow functions
createOrder(cartDetails).then(orderId => proceedToPayment(orderId))
    .then(paymentInfo => showOrderSummary(paymentInfo))
    .then(paymentInfo => updateWalletBalance(paymentInfo));