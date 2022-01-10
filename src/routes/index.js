const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.html", { title: "D3 drag and click" });
});

module.exports = router;
