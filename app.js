'use strict';

var PORT = 4000;

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var marked = require('marked');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(req, res) {
  var html = fs.readFileSync('./index.html').toString();
  res.send(html);
});

app.use('/markdown', require('./router/mark.js'));

app.listen(PORT, function() {
  console.log('Express server listening on port', PORT)
});
