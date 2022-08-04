/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();



module.exports = (db) => {
  //load home page, defaulting to favourited logins
  router.get("/", (req, res) => {
    let user_id = ''
    if (!req.session.userId) {
      //demo user
      user_id = 1;
    }
    else{
      user_id = req.session.userId.id;
    }
      let templateVars = {};
    console.log(`User id is : ${user_id}`);
      const queryString = `
      SELECT *
      FROM user_saved_logins
      WHERE user_id = $1
      AND favourite = true
      ;`

      db.query(queryString, [`${user_id}`])
        .then(data =>{
          console.log(data.rows);
          const templateVars = {user: req.session.userId, data: data.rows, Title: "My Favourites"};
          res.render('index', templateVars);

        })
        .catch(err => {
          console.log(err);
          const templateVars = {user: req.session.userId, data: '', Title: "My Favourites"};
          res.render('index', templateVars);
        })

  });

  router.get("/all", (req, res) => {
    if (!req.session.userId) {
      res.redirect("/");
    }

    user_id = req.session.userId.id;

      let templateVars = {};


      const queryString = `
      SELECT *
      FROM user_saved_logins
      WHERE user_id = $1
      ;`

      db.query(queryString, [`${user_id}`])
        .then(data =>{
          const templateVars = {user: req.session.userId, data: data.rows, Title: "All Saved Logins"};
          res.render('index', templateVars);

        })
        .catch(err => {
          console.log(err);
          const templateVars = {user: req.session.userId, data: '', Title: "All Saved Logins"};
          res.render('index', templateVars);
        })
  });


    return router;
};

