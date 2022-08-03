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
      const queryString = `
      SELECT *
      FROM user_saved_logins
      WHERE favourite = true
      ;`;
      const templateVars = {user: req.session.userId, queryString}
      res.redirect("/");
    }

    const templateVars = {user: req.session.userId, error: ""};
    res.render("login", templateVars);
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
       //set session cookie, with the logged in users username
      if(!data.rows[0]){
        const templateVars = {user: "", error: "Login not found, please verify and try again."}
        res.render("login", templateVars);
      }
      else{
        req.session.userId = data.rows[0];
        res.redirect("/");
      }


    })
    .catch(err => {
      console.log(err);

      res.render("login", templateVars);
    });
  });


  return router;
};
