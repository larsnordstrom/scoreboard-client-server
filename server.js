/**
 * 
 */
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");
//const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();

// Route imports


// Variables
const PORT = (process.env.PORT || 5000);

// App
app.use(helmet());
app.use(bodyParser.json({ type: 'application/*+json' }));

// Logging
app.use(morgan("dev"));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Routes


app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});