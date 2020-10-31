import express from "express";

// const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("welcome");
});

export default router;
