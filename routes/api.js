const express = require("express");
const bodyParser = require("body-parser");
const posts = require("../models/posts");

const router = express.Router();

router.get("/all", (req, res) => {
  res.json(JSON.stringify(posts.getALL()));
});

router.post("/new", bodyParser.json(), (req, res) => {
  let title = req.body.title;
  let desc = req.body.desc;

  posts.NewPost(title, desc);

  res.send("post enviado");
});

module.exports = router;
