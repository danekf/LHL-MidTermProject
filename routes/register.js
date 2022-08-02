/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const addUser = require('../public/scripts/database')
const getUserByUsername = require('../public/scripts/database')
const getUserWithEmail = require('../public/scripts/database')

module.exports = (db) => {
  router.get("/", (req, res) => {
    res.render("register");
  });

  router.post("/", (req, res) => {
    router.post('/', (req, res) => {
      const user = req.body;
      db.addUser(user)
      .then(user => {
        if (!user) {
          res.send({error: "error"});
          return;
        }
        req.session.userId = user.id;
        return res.redirect('/');

      })
      .catch(e => res.send(e));
    });

    // if (email === '' || username === '' || password === '') {
    //   return res.status(400).send('Status Code 400: Error, please enter an email, username and/or password to proceed.');
    // }
    // if (username) {
    //   return res.status(400).send('Status Code 400: Error, username is already in use.');
    // }
    // if (email) {
    //   return res.status(400).send('Status Code 400: Error, email address is already registered.');
    // }
  })
  return router;
};
