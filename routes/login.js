/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const bcrypt = require('bcryptjs');



module.exports = (db) => {
  router.get("/", (req, res) => {
    //if logged in, redirect

    if (req.session.userId){
      res.redirect("/");
    }

    const templateVars = {user: req.session.userId, error: ""};
    res.render("login", templateVars);
  });

  //login
  router.post("/", (req, res) => {
    console.log(`request: ${req.body}`);

    //get user provided login and password
    const login = req.body.login;
    const password = req.body.password;
    console.log(password);
    console.log(`Login: ${login} password: ${password}`)

    const queryString = `
    SELECT *
    FROM users
    WHERE email = $1
    OR username = $1
    ;`;

    const queryValues = [`${login}`];

    //query db for login info
    db.query(queryString, queryValues)
    .then(data => {
      console.log('user object:' , data.rows[0])
       //set session cookie, with the logged in users username
      if(!data.rows[0] || (!bcrypt.compareSync(password, data.rows[0].password))){
        console.log(bcrypt.compareSync(password, data.rows[0].password));
        const templateVars = {user: "", error: "Login error, please verify and try again."}
        res.render("login", templateVars);
      }
      else{
        req.session.userId = data.rows[0];
        res.redirect("/");
      }


    })
    .catch(err => {
      console.log(err);
      const templateVars = {user: req.session.userId, error: ""};
      res.render("login", templateVars);
    });
  });


  return router;
};
