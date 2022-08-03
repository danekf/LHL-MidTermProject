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
    //if logged in, redirect

    if (req.session.userId){
      res.redirect("/");
    }

    const templatevars = {user: req.session.userId, error: ""};
    res.render("login", templatevars);
  });

  //login
  router.post("/", (req, res) => {
    console.log(`request: ${req.body}`);

    //get user provided login and password
    const {login, password} = req.body;
    console.log(`Login: ${login} password: ${password}`)

    const queryString = `
    SELECT *
    FROM users
    WHERE (email = $1 AND password = $2)
    OR (username = $1 AND password = $2)
    ;`;

    const queryValues = [`${login}`, `${password}`];

    //query db for login info
    db.query(queryString, queryValues)
    .then(data => {

      req.session.userId = data.rows[0]; //set session cookie, with the logged in users username
      res.redirect("/");

    })
    .catch(err => {
      console.log(err);
      const templateVars = {user: "", error: "Login not found, please verify and try again."}
      res.render("login", templateVars);
    });
  });


  return router;
};
