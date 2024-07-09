var express = require("express");
var router = express.Router();

const uploadFile = require('../utils/uploadfile');
router.get("/", function (req, res, next) {
  res.render("index");
});

router.post("/upload", async (req, res, next) => {
  console.log(req.files);
  uploadFile(req, res);
});

module.exports = router;
