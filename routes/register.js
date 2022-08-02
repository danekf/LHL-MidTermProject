/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const app = express();
const router  = express.Router();
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bcrypt = require("bcryptjs");

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cookieSession({
    name: "session",
    keys: ["Hello Worldy Coding Friends", "My favourite drink is Bubble Tea"]
  })
);

module.exports = () => {
  router.get("/", (req, res) => {
      return res.render("register");
  });

  router.post("/", (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    if (email === '' || username === '' || password === '') {
      return res.status(400).send('Status Code 400: Error, please enter an email, username and/or password to proceed.');
    } else if (username) {
      return res.status(400).send('Status Code 400: Error, username is already in use.');
    } else if (email) {
      return res.status(400).send('Status Code 400: Error, email address is already registered.');
    }
    return res.redirect('/');
  })
  return router;
};

