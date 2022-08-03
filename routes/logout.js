

const express = require('express');
const router  = express.Router();



module.exports = (db) => {

//logout
  router.post("/", (req, res) => {
    req.session = null;
    res.redirect("/");
  });

  return router;

};
