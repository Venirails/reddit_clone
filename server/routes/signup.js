const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const db = require("../db/dbconfig");
const bcrypt = require("bcrypt");

router.post(
  "/",
  body("email", "Email is not valid").isEmail(),
  body("password", "Password must be at least 4 characters long").isLength({
    min: 4,
  }),
  body("username", "Username cannot be blank").notEmpty(),
  body("first_name", "First name cannot be blank").notEmpty(),
  body("last_name", "Last name cannot be blank").notEmpty(),
  (req, res) => {
    const errors = validationResult(req);
    if (errors.errors.length > 0) {
      res.status(400).json(errors.errors);
      return;
    }
    db("users")
      .where({ email: req.body.email })
      .then((user) => {
        if (user.length > 0) {
          res.status(400).json({
            message: "Email already exists",
          });
          return;
        } else {
          db("users")
            .where({ username: req.body.username })
            .then((user) => {
              if (user.length > 0) {
                res.status(400).json({
                  message: "Username already exists",
                });
                return;
              } else {
                db("users")
                  .insert({
                    email: req.body.email,
                    password_digest: bcrypt.hashSync(req.body.password, 10),
                    username: req.body.username,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                  })
                  .then((user) => {
                    res.status(201).json(user);
                  })
                  .catch((err) => {
                    res.status(500).json(err);
                  });
              }
            });
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: "Error creating user",
          error: err,
        });
      });
  }
);
module.exports = router;
