// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieSession = require('cookie-session');
const bcrypt = require('bcryptjs');

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);

db.connect()
.then(()=>  console.log("connected"))
  .catch(err => console.log(err))

  // Load the logger first so all (static) HTTP requests are logged to STDOUT
  // 'dev' = Concise output colored by response status for development use.
  //         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.

  app.set("view engine", "ejs");

  app.use(morgan("dev"));
  app.use(
    cookieSession({
      name: "session",
      keys:["potatoes make burgers great", "There once was a man from nantucket"] //just some keys to cycle through
    })
  );



app.use(express.urlencoded({ extended: true }));
app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const registerRoutes = require("./routes/register");
const addNewRoutes = require("./routes/addNew");
const editRoutes = require("./routes/edit");
const loginRoutes = require("./routes/login");
const logoutRoutes = require("./routes/logout");
const indexRoutes = require("./routes/index");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/register", registerRoutes(db));
app.use("/addNewLogin", addNewRoutes());
app.use("/editLogin", editRoutes());
app.use("/login", loginRoutes(db));
app.use("/logout", logoutRoutes());
app.use("/index", indexRoutes(db));


// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  const templatevars = {user: req.session.userId}
  res.render("index", templatevars);
});

app.listen(PORT, () => {
  console.log(`Signum App is listening on port ${PORT}`);
});
