'use strict'

var express = require('express');
var router = express.Router();
var fs = require('fs');
var marked = require('marked');


router.post('/', function(req, res) {
  var markdown = req.body.markdown;

  var markdownText = marked(markdown);
  res.send(markdownText);
});

module.exports = router;
