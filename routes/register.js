/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const bcrypt = require("bcryptjs");


module.exports = (db) => {
  router.get("/", (req, res) => {
    // If user is already logged in:
    if (req.session.userId) {
      res.redirect('/');
    }
    const templateVars = {user: req.session.userId, message: ''};
    res.render("register", templateVars );
  });

  // Register a new user:
  router.post("/", (req, res) => {
    console.log("body: ", req.body);
    // Create a new user with the login information below:
    const email = req.body.email;
    const username = req.body.username;
    const password = bcrypt.hashSync(req.body.password, 10);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    //const hashedPassword = bcrypt.hashSync(password, 10); // Password encryption

console.log("Registering user...")
    // if (username && email) {
      db.query(`SELECT * FROM users WHERE email = $1 OR username = $2`, [email, username])
        .then(data => {
          console.log('data:', data);
          let message = '';
          //if found report that to user
          if (!data.rows[0]) {
            console.log("registering user...");
            const queryString = `
            INSERT INTO
              users
              (email, username, password, first_name, last_name)
            VALUES
              ($1, $2, $3, $4, $5)
              RETURNING *;
            `;
            const queryValues = [`${email}`, `${username}`, `${password}`, `${firstName}`, `${lastName}`];
            db.query(queryString, queryValues)
              .then(data => {
                req.session.userId = data.rows[0];
                return res.redirect('/');
              })
              .catch(err => {
                console.log(err);
              });

          }
          //if not found go ahead and register
          else {
            console.log("User already registered.");
            message += "Email or username already registered!";
            const templateVars = {user: '', message: message};
            res.render("register", templateVars); //re render the page with the new messages in place
          }
        });
  });

  return router;
};
