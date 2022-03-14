const express = require("express");
const router = express.Router();
//const { body, validationResult } = require("express-validator");
//const User = require("../models/User");
//const db = require("../utils/dbConfig");
//const bookshelf = require("bookshelf")(db);
//const securePassword = require("bookshelf-secure-password");
//bookshelf.plugin(securePassword);
const queries = require('../db/queries');
const passport = require("passport");




router.post('/',passport.authenticate('jwt', { session: false }),
(req, res) => {
  queries.createPost(req.body.title, req.body.content,req.user.id).then(post => {
      res.json(post[0]);
  });
});
module.exports = router;
