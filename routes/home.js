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
    console.log("Loading index page...");
    if (!req.session.userId) {
      console.log("No user detected...");
      const templateVars = {user: "", data: ""};
      res.render("index", templateVars);
    } else {
      console.log("User found, querying database...")
      let templateVars = {};
      const user_id = req.session.userId.id;

      const queryString = `
      SELECT *
      FROM user_saved_logins
      WHERE user_id = $1
      AND favourite = true
      ;`

      db.query(queryString, [`${user_id}`])
        .then(data =>{
          console.log("database queried...");
          console.log(data.rows);
          const templateVars = {user: req.session.userId, data: data.rows};
          res.render('index', templateVars);

        })
        .catch(err => {
          console.log(err);
          const templateVars = {user: req.session.userId, data: ''};
          res.render('index', templateVars);
        })
    }

  });
    return router;
};

