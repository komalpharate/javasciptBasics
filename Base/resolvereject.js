//promise constructor inside the javascript runtime 
//just for an idea
new Promise((resolve, reject) => {
    // `resolve` and `reject` are functions provided by the JavaScript runtime
});

//internal implementation of the Promise class
function Promise(executor) {
    let state = 'pending'; // The initial state of the promise
    let value = undefined; // The value or reason of the promise
    let handlers = []; // List of `.then` handlers to be called when resolved or rejected

    function resolve(newValue) {
        if (state === 'pending') {
            state = 'fulfilled';
            value = newValue;
            // Notify all `.then` handlers about the resolution
            handlers.forEach(handler => handler(value));
        }
    }

    function reject(reason) {
        if (state === 'pending') {
            state = 'rejected';
            value = reason;
            // Notify all `.catch` handlers about the rejection
            handlers.forEach(handler => handler(reason));
        }
    }

    this.then = function (onFulfilled, onRejected) {
        return new Promise((resolve, reject) => {
            function handle() {
                if (state === 'fulfilled') {
                    if (typeof onFulfilled === 'function') {
                        try {
                            resolve(onFulfilled(value));
                        } catch (e) {
                            reject(e);
                        }
                    } else {
                        resolve(value);
                    }
                } else if (state === 'rejected') {
                    if (typeof onRejected === 'function') {
                        try {
                            resolve(onRejected(value));
                        } catch (e) {
                            reject(e);
                        }
                    } else {
                        reject(value);
                    }
                }
            }

            if (state === 'pending') {
                handlers.push(handle);
            } else {
                handle();
            }
        });
    };

    this.catch = function (onRejected) {
        return this.then(null, onRejected);
    };

    // Execute the provided executor function
    executor(resolve, reject);
}
