 // Import the Express.js library
const express = require('express');

// Create an instance of an Express application
const app = new express();

// Middleware to check for a specific password in query parameters
app.use(function (req, res, next) {
    // Check if the password query parameter matches the expected value
    if (req.query.password !== "pwd123") {
        // Send an error response if the password does not match
        return res.status(402).send("This user cannot login ");
    }
    // Log the current time
    console.log('Time:', Date.now());
    // Call the next middleware function
    next();
});

// Define a route for the /home path
app.get("/home", (req, res) => {
    // Send a "Hello World!" message as a response
    return res.send("Hello World!");
});

// Start the server and listen on port 3333
app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`);
});


//INSTRUCTIONS:
// Run the server.
// node expressAppLevelMiddleware.js

// You should see output which says Listening at http://localhost:3333

// In the second terminal window, use the curl command to ping the application.
// curl localhost:3333/home
// You should see output which say This user cannot login.

// Execute curl command passing the password parameter
// curl http://localhost:3333/home?password=pwd123
// You should see output which say Hello World!.

// This is because the server has a middleware which filters each request to the server to see what the password is and allows to proceed only when the password is pwd123.