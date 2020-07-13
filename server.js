const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const routes = require("./routes");
const passport = require("./config/passport");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const PORT = process.env.PORT || 3001;
require("./utils/discussions")(io);

// Define middleware here

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({ secret: "Hi there", resave: false, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rlms");

// Start the API server
server.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
