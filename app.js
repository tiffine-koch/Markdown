'use strict';

var PORT = 4000;

// bring in dependencies / libraries
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var marked = require('marked');

// configure general middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// route definitions
app.get('/', function(req, res) {
  var html = fs.readFileSync('./index.html').toString();
  res.send(html);
});

// app.post('/markdown', function(req, res) {
//   var markdown = req.body.markdown;
//
//   var markdownText = marked(markdown);
//   res.send(markdownText);
// });

app.use('/markdown', require('./router/mark.js'));

// spin up server
app.listen(PORT, function() {
  console.log('Express server listening on port', PORT)
});
