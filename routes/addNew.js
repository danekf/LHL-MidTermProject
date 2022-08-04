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
    //if not logged in, redirect to login with message to user
    if (!req.session.userId) {
      res.redirect('/login')
    }

    const templatevars = {user: req.session.userId}
    res.render("addNewLogin", templatevars)
  });

  router.post("/", (req, res) => {
    const user_id = req.session.userId.id;
    const{login, URL, password, loginName} = req.body;

    console.log(req.body);

    const queryString = `
            INSERT INTO
              user_saved_logins
              (user_id, saved_username, saved_password, login_url, service_name)
            VALUES
              ($1, $2, $3, $4, $5)
              RETURNING *;
            `;
            const queryValues = [`${user_id}`, `${login}`, `${password}`, `${URL}`, `${loginName}`];
            db.query(queryString, queryValues)
              .then(data => {
                return res.redirect('/');
              })
              .catch(err => {
                console.log(err);
              });


  });


  return router;
};
