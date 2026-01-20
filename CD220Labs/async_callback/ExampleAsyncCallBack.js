// This method will be provided as a parameter
function firstCallBackMethod() {
    // Logging a message inside the callback method
    console.log("Inside the first call back method");
}

// Log message before calling setTimeout
console.log("Going to call setTimeout with a delay of 5 seconds");

// Call the function firstCallBackMethod after a delay using setTimeout
setTimeout(firstCallBackMethod, 5000);


// firstCallBackMethod() is a function that logs a message "Inside the first call back method". This function will be used as a callback.

// Before calling setTimeout, a log message "Going to call setTimeout with a delay of 5 seconds" is printed to indicate the impending timer setup.

// setTimeout(firstCallBackMethod, 5000) schedules the execution of firstCallBackMethod() after a delay of 5000 milliseconds (5 seconds), allowing the rest of the code to continue executing immediately while the timer runs in the background.

// In the terminal window run the server with the following command.
// 1
// node ExampleAsyncCallBack.js

// Copied!

// Wrap Toggled!
// setTimeout is a built-in library method which allows you to pass a method which needs to be called on timeout, as aparameter. Here firstCallBackMethod is defined and then passed as a parameter to setTimeOut. As you may have observed, the method will be called after 5 seconds. This is called callback