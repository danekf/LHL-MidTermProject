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
    res.render("login")
  });

  router.post("/", (req, res) => {
    //get user provided login and password
    const {login, password} = req.body;

    //query db for login info
    db.query(`SELECT *
    FROM users
    WHERE (email = $1 AND password = $2)
    OR (username = $1 AND password = $2);`, [`%${login}%`, `%${password}%`])
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

  });


  return router;
};
