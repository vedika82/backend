 // Import the HTTP module
const http = require('http');

// Define the request listener function
const requestListener = function (req, res) {
    res.writeHead(200); // Set the status code to 200 (OK)
    res.end('Hello, World!'); // Send the response "Hello, World!"
};

// Define the port number
const port = 8080;

// Create an HTTP server using the request listener function
const server = http.createServer(requestListener);

// Start the server and listen on the specified port
server.listen(port);
console.log('Server listening on port: ' + port);


//to check the contents of the script we use the 'cat index.js' cmmd

// HTTP Module Import the HTTP module from Node.js.

// Request Listener Function Define a request listener function that handles incoming HTTP requests. In this case, the function sets the status code to 200 (OK) and sends the response "Hello, World!".

// Port Definition Define the port number as 8080 using const port = 8080;

// Create HTTP Server Create an HTTP server using http.createServer(requestListener);, where requestListener is the defined request listener function.

// Server Start Start the server and listen on the specified port using server.listen(port);. Also, log a message indicating that the server is listening on the specified port.

//in order to start the server we use the 'node index.js' cmmd
//in order to get the output from the port that use node cmmd we use the 'curl localhost:8080'