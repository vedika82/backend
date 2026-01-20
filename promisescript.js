//Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
let myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise resolved")
    },6000)})

//Console log before calling the promise
console.log("Before calling promise");

//Call the promise and wait for it to be resolved and then print a message.
myPromise.then((successMessage) => {
    console.log("From Callback " + successMessage)
  })

//Console log after calling the promise
  console.log("After calling promise");

// The above code creates a promise (myPromise) that resolves after 6 seconds with the message Promise resolved.
// The script first logs Before calling promise to the console.
// Then, it sets up the then method to handle the promise resolution, but the callback does not execute yet.
// Immediately after this, the script logs After calling promise to the console.
// After 6 seconds, the promise resolves, and the callback logs From Callback Promise resolved to the console.
// Go to the terminal and run the file to verify your guess.

// node promisescript.js
// Before calling promise
// After calling promise
// From Callback Promise resolved