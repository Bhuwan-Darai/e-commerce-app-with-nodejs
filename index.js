const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");

//middleware
app.use(bodyParser.urlencoded({ extended: true }));

// route handler to handle request from client & callback function run
app.get("/", (req, res) => {
  res.send(`
  <div>
        <form method="POST">
        <input name="email" placeholder="email"/>
        <input name="password" placeholder="password"/>
        <input name="passwordConfirmation" placeholder="Password Confirmation"/>
        <button>Sign Up</button>
        </form>
  </div>
  `);
});

//post request handler for acccount creation
app.post("/", (req, res) => {
  console.log(req.body);
  res.send(`Account Created!!`);
});

//watch incoming request on port 3000
app.listen(3000, () => {
  console.log("Listening");
});
