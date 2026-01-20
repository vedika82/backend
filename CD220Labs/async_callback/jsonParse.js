// Requiring axios module for making HTTP requests
const axios = require('axios').default;

// Sending a GET request to the specified URL using axios
const req = axios.get("https://raw.githubusercontent.com/ibm-developer-skills-network/lkpho-Cloud-applications-with-Node.js-and-React/master/CD220Labs/async_callback/courseDetails.json");
// Logging the initial promise object
console.log(req);
// Handling the promise resolution
req.then(resp => {
    // Storing the response data in the courseDetails variable
    let courseDetails = resp.data;
    // Logging the course details as a formatted JSON string
    console.log(JSON.stringify(courseDetails, null, 4));
})
// Handling the promise rejection
.catch(err => {
    // Logging the error message
    console.log(err.toString());
    // This will console log the error with the code. e.g., Error: Request failed with status code 404
});





// Explanation of the Code
// require('axios').default imports the axios module, which is used for making HTTP requests.

// axios.get() sends a GET request to the specified URL to fetch the courseDetails.json file.

// The req constant stores the promise returned by axios.get.

// console.log(req) logs the initial promise object to the console.

// req.then(resp => { ... }) handles the promise resolution:

// let courseDetails = resp.data stores the response data in the courseDetails variable.
// console.log(JSON.stringify(courseDetails, null, 4)) logs the course details as a formatted JSON string with indentation.
// req.catch(err => { ... }) handles the promise rejection:

// console.log(err.toString()) logs the error message, which includes the error code and description if the request fails (e.g., Error: Request failed with status code 404).
// To run this code, we need to install axios package. You will be having the axios module that you installed in the previous exercise. If not, run the following command to install axios.
// 1
// npm install --save axios

// Copied!

// Wrap Toggled!
// In the terminal window run the code with the following command.
// 1
// node jsonParse.js

// Copied!

// Wrap Toggled!
// When you run the code, an axios request is made to a remote URL which returns a JSON object. This JSON object is stringified(or formatted in a readble form) and logged on the console. The output will be as below.