const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  
  res.send("home");
});
router.get("/list", (req, res) => {
  res.send(['11','22','aa']);
});
module.exports = router;
