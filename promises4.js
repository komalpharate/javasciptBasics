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
  'userName': 'komal',
  'userid': 12432
};

const validateCart = function (cartDetails) {
  if (cartDetails.userName === 'komal')
    return true;
  else
    return false;
}

const promise = createOrder(cartDetails);
console.log(typeof (promise)); //Promise { '124' } //typeof = object 

promise.then(function (orderId) {
  console.log("Order created", orderId);
})
  //if catch not written, code execution will be halt wherever reject(err) is called
  .catch(function (err) {
    console.log(err.message); //Cart is not valid
  })

function createOrder(cartDetails) {
  //creating a promise  
  const createPromise = new Promise((resolve, reject) => {
    //logic to create order
    //validate the cart
    if (!validateCart(cartDetails)) {
      const err = new Error("Cart is not valid");
      reject(err);  //returns Error object with above string as message value 
    }
    const orderId = '124';
    if (orderId) {
      // setTimeout(()=>resolve(orderId) //resolve returns the promise with properties=arguments passed by us 
      // , 5000);
      resolve(orderId);
    }
  });
  //returning a promise
  return createPromise;
}
