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

  //direct user to edit page, using data from form clicked
  router.post("/", (req, res) => {
    if (req.session.userID) {
      res.redirect("/login"); //redirect user to login
    }

    const{service_name, saved_username, saved_password, login_URL, saved_login_id} = req.body;
    const templateVars={user: req.session.userId, service_name: service_name, saved_username: saved_username, saved_password, saved_password, login_URL:
    login_URL, saved_login_id: saved_login_id};

    res.render("editLogin", templateVars);
  });

  //process user updated form
  router.post("/update", (req, res) => {
    if (req.session.userID) {
      res.redirect("/login"); //redirect user to login
    }

    const {login, URL, loginName, password ,saved_login_id} = req.body;

    const user_id = req.session.userId.id;

    const queryString = `
            UPDATE user_saved_logins
            SET saved_username = $1, saved_password = $2, login_url = $3, service_name = $4
            WHERE user_id = $5 AND id = $6
            `;
            const queryValues = [`${login}`, `${password}`, `${URL}`, `${loginName}`, `${user_id}`, `${saved_login_id}`];
            db.query(queryString, queryValues)
              .then(data => {
                return res.redirect('/');
              })
              .catch(err => {
                console.log(err);
              });
  });

  router.post("/favourite", (req, res) => {
    const queryString = `
    UPDATE user_saved_logins
    SET favourite = true
    WHERE user_id = $1 AND id = $2
    `;

    const {saved_login_id} = req.body;
    const user_id = req.session.userId.id;

    console.log(`Saved Login ID: ${saved_login_id}`);
    console.log(`user ID: ${user_id}`);

    const queryValues = [ `${user_id}`, `${saved_login_id}`];

    db.query(queryString, queryValues)
      .then(data => {
        return res.redirect('/');
      })
      .catch(err => {
        console.log(err);
      })


  });

  router.post("/removeFavourite", (req, res) =>{
    const queryString = `
    UPDATE user_saved_logins
    SET favourite = false
    WHERE user_id = $1 AND id = $2
    `;

    const {saved_login_id} = req.body;
    const user_id = req.session.userId.id;

    console.log(`Saved Login ID: ${saved_login_id}`);
    console.log(`user ID: ${user_id}`);

    const queryValues = [ `${user_id}`, `${saved_login_id}`];

    db.query(queryString, queryValues)
      .then(data => {
        return res.redirect('/');
      })
      .catch(err => {
        console.log(err);
      })

  });

  return router;
};
