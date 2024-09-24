//writing promises
const cartDetails = {
    "products": [
        {
            "id": 1,
            "name": "Classic White T-Shirt",
            "description": "A comfortable and stylish white t-shirt made from 100% cotton.",
            "price": 19.99,
            "category": "T-Shirts"
        },
        {
            "id": 2,
            "name": "Slim Fit Jeans",
            "description": "Trendy slim-fit jeans with a modern cut and dark blue wash.",
            "price": 49.99,
            "category": "Jeans"
        },
        {
            "id": 3,
            "name": "Elegant Black Dress",
            "description": "An elegant black dress suitable for formal occasions and evening wear.",
            "price": 89.99,
            "category": "Dresses"
        },
        {
            "id": 4,
            "name": "Comfortable Hoodie",
            "description": "A cozy hoodie perfect for casual wear and lounging.",
            "price": 39.99,
            "category": "Hoodies"
        },
        {
            "id": 5,
            "name": "Lightweight Jacket",
            "description": "A versatile lightweight jacket ideal for layering during cooler months.",
            "price": 59.99,
            "category": "Jackets"
        }
    ],
    'userName': 'kkomal',
    'userid': 12432
};

const validateCart = function (cartDetails) {
    if (cartDetails.userName === 'komal')
        return true;
    else
        return false;
}

//catching error after respective then, => next chain execution isn't halted
createOrder(cartDetails)
    .then(function (orderId) {
        console.log("Order created", orderId);
        return orderId; //a promise or data :both can be returned
    })
    .catch(function (err) {
        console.log(err.message); //Cart is not valid
    })
    .then(function (order) {
        console.log("Input order:", order);
        let x =  proceedToPayment(order);
        console.log(x); //Promise { 'payment successful' }
        return x;   //returning a promise
        //OR simply
        //return proceedToPayment(order);
    })
    .catch(function (err) {
        console.log(err.message); //payment failed
    })
    .then(function (paymentInfo) {
        console.log("Logging down payment info:", paymentInfo);
        if(!paymentInfo)
            return new Error("Logggg failed");
    })
    .catch(function (err) {
        console.log(err.message); //Logg failed
    })
    .then(function(){
        console.log("No matter what happens I will be called");
    })

function createOrder(cartDetails) {
    //creating a promise  
    const createPromise = new Promise((resolve, reject) => {

        if (!validateCart(cartDetails)) {
            const err = new Error("Cart is not valid");
            reject(err);  //returns Error object with above string as message value 
        }
        const orderId = '';
        if (orderId) {
            // setTimeout(()=>resolve(orderId) //resolve returns the promise with properties=arguments passed by us 
            // , 5000);
            resolve(orderId);
        }
    });
    //returning a promise
    return createPromise;
}

function proceedToPayment(orderId) {
    //code to do payment
    const payment = new Promise(function (resolve, reject) {
        if(orderId)
            resolve('payment successful');
        else
            reject(new Error("Payment gateway failed"));
    });
    return payment;
}