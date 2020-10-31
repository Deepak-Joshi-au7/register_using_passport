import express from "express";
const router = express.Router();

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
  console.log(req.body);
  res.send("Hello register");
});

export default router;
