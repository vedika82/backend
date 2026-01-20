// Requiring axios module for making HTTP requests
const axios = require('axios').default;

// Function to connect to a URL and handle the response
const connectToURL = (url) => {
    // Sending a GET request to the specified URL using axios
    const req = axios.get(url);
    // Logging the initial promise object
    console.log(req);
    // Handling the promise resolution
    req.then(resp => {
        // Logging the fulfillment message
        console.log("Fulfilled");
        // Logging the response data
        console.log(resp.data);
    })
    // Handling the promise rejection
    .catch(err => {
        // Logging the rejection message with the URL
        console.log("Rejected for url " + url);
        // Logging the error message
        console.log(err.toString());
    });
}

// Valid URL
connectToURL('https://raw.githubusercontent.com/ibm-developer-skills-network/lkpho-Cloud-applications-with-Node.js-and-React/master/CD220Labs/async_callback/sampleData.json');
// Invalid URL
connectToURL('https://raw.githubusercontent.com/ibm-developer-skills-network/lkpho-Cloud-applications-with-Node.js-and-React/master/CD220Labs/async_callback/sampleDate.json');





// Explanation of the Code
// require('axios').default imports the axios module, which is used for making HTTP requests.

// connectToURL(url) defines a function that takes a URL as a parameter and sends a GET request to that URL using axios.get(url). It logs the initial promise object returned by axios.get.

// Inside the connectToURL function:

// req.then(resp => { ... }) handles the promise resolution by logging "Fulfilled" and the response data (resp.data) if the request is successful.
// req.catch(err => { ... }) handles the promise rejection by logging "Rejected for url" followed by the URL and the error message if the request fails.
// The connectToURL() function is used to call a URL. Providing a valid URL should successfully fetch the data, while an invalid URL should result in an error and activate the rejection handler.

// To run this code, we need to install axios package. Run the following command to install axios.
// 1
// npm install --save axios

// Copied!

// Wrap Toggled!
// In the terminal window run the code with the following command.
// 1
// node asyncAxiosRequest.js

// Copied!

// Wrap Toggled!
// When you run the code, the first connectToURL is an axios request to a valid URL which will return JSON object. The second connectToURL is an axiosRequest to an invalid URL. This will return appropriate error message. The output will be as below.

