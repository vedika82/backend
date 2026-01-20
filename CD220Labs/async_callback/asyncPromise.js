// Requiring prompt-sync module to enable synchronous user input
let prompt = require('prompt-sync')();

// Requiring fs module - fs is used for File I/O
let fs = require('fs');

// Creating a new Promise to handle file reading
const methCall = new Promise((resolve, reject) => {
    // Prompting the user to input the filename
    let filename = prompt('What is the name of the file?');
    try {
        // Reading the file synchronously
        const data = fs.readFileSync(filename, { encoding: 'utf8', flag: 'r' });
        // Resolving the promise with the file data if read successfully
        resolve(data);
    } catch (err) {
        // Rejecting the promise if an error occurs
        reject(err);
    }
});

// Logging the promise object
console.log(methCall);

// Handling the resolved and rejected states of the promise
methCall.then(
    // Logging the file data if the promise is resolved
    (data) => console.log(data),
    // Logging an error message if the promise is rejected
    (err) => console.log("Error reading file")
);


// Explanation of the Code
// require('prompt-sync')() imports the prompt-sync module to enable synchronous user input. require('fs') imports the Node.js built-in fs module for file system-related functionality.

// const methCall = new Promise((resolve, reject) => { ... }) creates a new promise to handle the file reading process. The promise takes a callback function with resolve and reject parameters.

// Inside the promise:

// let filename = prompt('What is the name of the file?') prompts the user to input the filename.
// fs.readFileSync(filename, { encoding: 'utf8', flag: 'r' }) attempts to read the specified file synchronously with UTF-8 encoding.
// If the file is read successfully, resolve(data) is called with the file data, resolving the promise.
// If an error occurs, reject(err) is called with the error, rejecting the promise.
// console.log(methCall) logs the promise object.

// methCall.then(...).catch(...) handles the promise:

// then((data) => console.log(data)) logs the file data if the promise is resolved.
// catch((err) => console.log("Error reading file")) logs an error message if the promise is rejected.
// In the terminal window run the following command to install prompt-sync. Using --save ensures that the package.json file is updated for dependencies.
// 1
// npm install --save prompt-sync

// In the terminal window run the server with the following command. It will ask you for a filename. Enter a valid filename from the current directory.
// 1
// node asyncPromise.js

// methCall here is a promise object. When the promise is full-filled, the console log will be printed. Run the above command again and try to pass an invalid filename. See the console log printed out as the promise is being rejected.

