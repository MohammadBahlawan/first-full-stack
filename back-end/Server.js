var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var morgan = require("morgan");
var port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(morgan("dev"));

// Have Express server up our static files instead of Brackets Live Preview. Yessss!
app.use(express.static("../front-end"));

app.use("/votes", require("./routes/votesRoutes"));

mongoose.connect("mongodb://localhost/rock-the-vote", function() {
    console.log("Database is connected");
});

app.listen(port, function() {
    console.log("Server is running on port " + port);
});
