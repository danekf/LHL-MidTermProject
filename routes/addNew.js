/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const bcrypt = require('bcryptjs');



module.exports = () => {
  router.get("/", (req, res) => {
    const templatevars = {user: req.session.userId}
    res.render("addNewLogin", templatevars)
  });


  return router;
};
