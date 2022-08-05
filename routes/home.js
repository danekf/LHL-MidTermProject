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
    let user_id = '';
    let title = '';
    if (!req.session.userId) {
      //demo user
      user_id = 1;
      title = 'My Favourites (DEMO)';

    } else {
      user_id = req.session.userId.id;
      title = 'My Favourites'
    }
    const queryString = `
      SELECT *
      FROM user_saved_logins
      WHERE user_id = $1
      AND favourite = true
      ORDER BY id
      ;`;

    db.query(queryString, [`${user_id}`])
      .then(data =>{
        const templateVars = {user: req.session.userId, data: data.rows, Title: title};
        res.render('index', templateVars);

      })
      .catch(err => {
        console.log(err);
        const templateVars = {user: req.session.userId, data: '', Title: "Favourites"};
        res.render('index', templateVars);
      });

  });

  router.get("/all", (req, res) => {
    if (!req.session.userId) {
      res.redirect("/");
    }

    const user_id = req.session.userId.id;
    const queryString = `
      SELECT *
      FROM user_saved_logins
      WHERE user_id = $1
      ORDER BY id
      ;`;

    db.query(queryString, [`${user_id}`])
      .then(data =>{
        const templateVars = {user: req.session.userId, data: data.rows, Title: "All Saved Logins"};
        res.render('index', templateVars);

      })
      .catch(err => {
        console.log(err);
        const templateVars = {user: req.session.userId, data: '', Title: "All Saved Logins"};
        res.render('index', templateVars);
      });
  });

  router.post("/search", (req, res) => {
    const {search} = req.body;
    const user_id = req.session.userId.id;
    const queryString = `
      SELECT *
      FROM user_saved_logins
      WHERE user_id = $1
      AND LOWER (service_name) LIKE  LOWER ($2)
      ORDER BY id
      ;`;

    const queryVars = [`${user_id}`,`%${search}%`];

    db.query(queryString, queryVars)
      .then(data => {
        if (!data.rows[0]) {
          const templateVars = {user: req.session.userId, data: data.rows, Title: "No results found for search"};
          return res.render('index', templateVars);
        }

        const templateVars = {user: req.session.userId, data: data.rows, Title: "Search results"};
        return res.render('index', templateVars);
      })
      .catch(err =>{
        console.log(err);
      });


  });


  return router;
};

