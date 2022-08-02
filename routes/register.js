/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const { Template } = require('ejs');
const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const user = req.session.userID;
    const templateVars = {user};
    if (user) {
      return res.redirect('index', templateVars );
    }
      return res.render("register");
  });

  router.post("/", (req, res) => {
    // Create a new user with the login information below:
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    const queryString = `
    SELECT *
    FROM users
    WHERE email LIKE $1 AND username LIKE $2;`;

    const queryValues = [`${email}%`, `${username}`]

    db.query(queryString, queryValues)
    .then(data => {
      console.log(data.rows);
    })
    .catch(err => {
      res.status(500)
      .json({errror: err.message})
    })

    if (email === '' || username === '' || password === '') {
      return res.status(400).send('Status Code 400: Error, please enter an email, username and/or password to proceed.');
    }
    if (username) {
      return res.status(400).send('Status Code 400: Error, username is already in use.');
    }
    if (email) {
      return res.status(400).send('Status Code 400: Error, email address is already registered.');
    }
    return res.redirect('index');
  })
  return router;
};

