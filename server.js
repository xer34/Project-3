//important things go here
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const db = require("./models");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const exjwt = require("express-jwt");
const path = require('path');

//=======================================================================
const jwtMW = exjwt({
  secret: "super secret"
});
//port
const PORT = process.env.PORT || 3001;
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//cors, aka magic
app.use("*", cors({ origin: "http://localhost:3000" }));
app.use(
  cors({
    allowedHeaders:
      "Access-Control-Allow-Origin, Origin, Accept,Content-Type,X-Requested-With,x-api-key,Referer, Origin,User-Agent, Authorization"
  })
);
//more cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Origin, Origin, Accept,Content-Type,X-Requested-With,x-api-key,Referer, Origin,User-Agent, Authorization"
  );
  next();
});


app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'client/build')))
app.get('/*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'client/build', 'index.html')) 
})
//=======================================================================
app.use(routes);
//routes
//=======================================================================
app.post("/Register", (req, res) => {
  const { username, password } = req.body;
  const saltRounds = 10;
  bcrypt.hash(password, saltRounds, function(err, hash) {
    db.onsiteUser
      .create({
        username: username,
        password: hash,
        location: "",
        picture: "http://www.placecage.com/150/150",
        banner: ""
      })
      .then(result => {
        console.log("User created: ", result);
        res.json("user created!");
      });
  });
});
/* This is SUPER important! This is the route that the client will be passing the entered credentials for verification to. If the credentials match, then the server sends back a json response with a valid json web token for the client to use for identification. */
app.post("/Login", (req, res) => {
  const { username, password } = req.body;
  // console.log("User submitted: ", username, password);
  db.onsiteUser
    .findOne({
      username: username
    })
    .then(user => {
      console.log("User Found: ", user);
      if (user === null) {
        res.status(401).json({
          sucess: false,
          token: null,
          err: "Invalid Credentials"
        });
      }
      bcrypt.compare(password, user.password, function(err, result) {
        if (result) {
          console.log("Valid!");
          let token = jwt.sign(
            {
              username: user.username
            },
            "super secret",
            { expiresIn: 129600 }
          ); // Signing the token
          res.json({
            sucess: true,
            err: null,
            token
          });
        } else {
          console.log("Entered Password and Hash do not match!");
          res.status(401).json({
            sucess: false,
            token: null,
            err: "Entered Password and Hash do not match!"
          });
        }
      });
    });
});
//
app.get("/", jwtMW /* Using the express jwt MW here */, (req, res) => {
  console.log("Web Token Checked.");
  res.send("You are authenticated"); //Sending some response when authenticated
});

//routes
app.post("/ProfileSettings", (req, res) => {
  const { username, location, picture, banner } = req.body;
  console.log("profile settings post:", username, location, picture, banner)
  
  db.onsiteUser
  .findOneAndUpdate({username: username},  { $set: { location: location, picture: picture, banner: banner }})
    .then(result => {
      console.log("updates saved: ", result);
      res.json("updates saved");
    });
});

// post route for finding players close to you
app.post("/Find", (req, res) => {
  const { zip } = req.body;
  db.onsiteUser.find({ location: zip }).then(result => {
    res.json(result);
  });
});

//
app.post("/Profile", (req, res) => {
  const { name } = req.body;
  // console.log(name)
  db.onsiteUser
    .findOne({ username: name })
    .then(result => {
      res.json(result);
      console.log(result)
    })
});
module.exports = app;
//=======================================================================
//=======================================================================
//=======================================================================
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3");
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
