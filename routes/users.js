import express from "express";
const router = express.Router();
import bcrypt from "bcryptjs";

//User model
import User from "../models/User";

//Login Page

router.get("/login", (req, res) => {
  res.render("Login");
});

//Register Page
router.get("/register", (req, res) => {
  res.render("register");
});

// Register Handle
router.post("/register", (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];

  // Check required fields
  if (!name || !email || !password || !password2) {
    errors.push({ msg: "Please fill all the fields" });
  }

  if (password !== password2) {
    errors.push({ msg: "password doesnt match" });
  }

  if (password.length < 6) {
    errors.push({ msg: "Password should be atleast 6 characters" });
  }

  if (errors.length > 0) {
    res.render("register", {
      errors,
      name,
      email,
      password,
      password2,
    });
  } else {
    // After passes all the validations
    User.findOne({ email: email }).then((user) => {
      if (user) {
        // User exist
        res.render("register", {
          errors,
          name,
          email,
          password,
          password2,
        });
      } else {
        const newUser = new User({
          name,
          email,
          password,
        });
        // password bcrypt
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            // set password to hashed
            newUser.password = hash;

            // Save User
            newUser
              .save()
              .then((user) => {
                res.redirect("/login");
              })
              .catch((err) => console.log(err));
          })
        );
      }
    });
  }
});

export default router;
