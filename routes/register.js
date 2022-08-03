/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    // If user is already logged in:
    if (req.session.userId) {
      res.redirect('/');
    }
    res.render("register");
  });

  // Register a new user:
  router.post("/", (req, res) => {
    // Create a new user with the login information below:
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    console.log(req.body);
    const queryString = `
      INSERT INTO
        users
        (email, username, password, first_name, last_name)
      VALUES
        ($1, $2, $3, $4, $5)
        RETURNING *;
      `;
      const queryValues = [`${email}`, `${username}`, `${password}`, `${firstName}`, `${lastName}`];

      // Query the db to see if information already exists:
    db.query(queryString, queryValues)
    .then(data => {
        req.session.userId = data.rows[0].username;
        return res.redirect('/');
    })
    .catch(err => {
      console.log(err);
    })
  })
  return router;
};

