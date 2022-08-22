const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  var list = ['aaa','bbb','ccc']
  
 res.render('home',{list:list})
});
router.get("/list", (req, res) => {
  res.send(['11','22','aa']);
});
module.exports = router;
