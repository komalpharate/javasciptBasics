//Error Handling in NodeJS
function divideNumbers(a, b) {
    try {
        if (b === 0) throw new Error("Division by zero is not allowed!");
        return a / b;
    } catch (error) {
        console.error("Error caught:", error.message);
    }
}

divideNumbers(10, 0);  // Logs: Error caught: Division by zero is not allowed!

//b) Asynchronous Code with Callbacks

const fs = require('fs');

fs.readFile('nonexistentFile.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
        return;
    }
    console.log(data);
});

//c) Asynchronous Code with Promises

const fetchData = () => {
    return new Promise((resolve, reject) => {
        // Simulating an async operation that fails
        reject(new Error("Data fetch failed"));
    });
};

fetchData()
    .then(data => console.log(data))
    .catch(error => console.error("Promise rejected:", error.message));


//d) Asynchronous Code with async/await
async function fetchData() {
    try {
        // Simulating async function
        const data = await someAsyncFunction();
        console.log(data);
    } catch (error) {
        console.error("Error in async function:", error.message);
    }
}

fetchData();


/**
 * Winston: A versatile and popular logger.
Morgan: Primarily used for logging HTTP requests in Express.
 */
const winston = require('winston');

const logger = winston.createLogger({
    level: 'error', // Set log level
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.Console() // Log to console too
    ]
});

try {
    throw new Error("Something went wrong");
} catch (error) {
    logger.error(`Error message: ${error.message}`);
}

/**
 * c) Logging HTTP Errors with Express
If you're using Express for web applications, handling and logging errors becomes important for handling server responses.

Handling errors in middleware:

Add an error-handling middleware at the end of your routes in Express:
 */

app.use((err, req, res, next) => {
    console.error("Error caught:", err.message);
    res.status(500).send("Something went wrong!");
});

/**
 * Use Morgan with express to log HTTP requests:
 */

const morgan = require('morgan');
const express = require('express');
const app = express();

app.use(morgan('combined'));  // Logs HTTP requests

/**
 * Global Error Handling
a) Uncaught Exceptions
To handle errors that were not caught by any part of your code, use the uncaughtException event:
 */
process.on('uncaughtException', (err) => {
    console.error("Uncaught Exception:", err.message);
    // Consider exiting the process after an uncaught exception
    process.exit(1);
});

/**
 * b) Unhandled Promise Rejections
For promises that are rejected without a .catch() handler, listen for the unhandledRejection event:
 */
process.on('unhandledRejection', (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
    // Handle the rejection (e.g., log it, shut down, etc.)
});
