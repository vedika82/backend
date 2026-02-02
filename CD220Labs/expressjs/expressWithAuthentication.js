 // Importing required modules: Express.js, JSON Web Token (JWT), and Express session
const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session');

let users = [];

// Function to check if the user exists
const doesExist = (username) => {
  let userswithsamename = users.filter((user) => {
    return user.username === username;
  });
  return userswithsamename.length > 0;
};

// Function to check if the user is authenticated
const authenticatedUser = (username, password) => {
  let validusers = users.filter((user) => {
    return user.username === username && user.password === password;
  });
  return validusers.length > 0;
};

const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

app.use(session({ secret: "fingerpint" })); // Middleware to handle sessions

// Middleware to authenticate users using JWT
app.use("/auth", function auth(req, res, next) {
  if (req.session.authorization) { // Get the authorization object stored in the session
    token = req.session.authorization['accessToken']; // Retrieve the token from authorization object
    jwt.verify(token, "access", (err, user) => { // Use JWT to verify token
      if (!err) {
        req.user = user;
        next();
      } else {
        return res.status(403).json({ message: "User not authenticated" });
      }
    });
  } else {
    return res.status(403).json({ message: "User not logged in" });
  }
});

// Route to handle user login
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(404).json({ message: "Error logging in" });
  }

  if (authenticatedUser(username, password)) {
    let accessToken = jwt.sign({
      data: password
    }, 'access', { expiresIn: 60 * 60 });

    req.session.authorization = {
      accessToken, username
    };
    return res.status(200).send("User successfully logged in");
  } else {
    return res.status(208).json({ message: "Invalid Login. Check username and password" });
  }
});

// Route to handle user registration
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    if (!doesExist(username)) {
      users.push({ "username": username, "password": password });
      return res.status(200).json({ message: "User successfully registered. Now you can login" });
    } else {
      return res.status(404).json({ message: "User already exists!" });
    }
  }
  return res.status(404).json({ message: "Unable to register user." });
});

// Main endpoint to be accessed by authenticated users
app.get("/auth/get_message", (req, res) => {
  return res.status(200).json({ message: "Hello, You are an authenticated user. Congratulations!" });
});

const PORT = 5000; // Define the port number

app.listen(PORT, () => console.log("Server is running")); // Start the server and listen on the specified port




// In the second terminal window, use the following curl command.
// curl localhost:5000/auth/get_message
// You should see an output which says {"message":"User not logged in"}.

//open in web browser
// You have to register a user with a username and password and login with that username and password to be able to access the end-point. 
// Click on the Skills Network Toolbox icon, choose Others and click Launch Application. Enter the port number 5000 and open the URL. 
// It will open in a new browser window. Copy the url. Go to https://www.postman.com/. You may have to sign in if this is your first time using postman.

// In the postman, enter the URL that you copied and suffix it with /register.
// Select 'Body' >> 'raw' >> 'JSON' and pass the parameters.
// {"username":"user2", "password":"password2"}
// Set the query type to POST and click send. You will see a confirmation saying that the user has been registered.
// Use the same copied url now to login with the suffix /login. The parameters to be passed remain the same. This is also a POST request. Click send. You will see a message confirming that you are logged in, as seen below.
// Now you can access the /auth/get_message end point and it will return the message.