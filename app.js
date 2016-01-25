'use strict';

var PORT = 4000;

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var path = require('path');

app.set('views', path.join(__dirname, './views'));
// app.set('views', path.join(__dirname, 'views')); //this is the same
app.set('view engine', 'hbs');
// var marked = require('marked');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', require('./router/index'));
app.use('/markdown', require('./router/mark.js'));

// app.get('/', function(req, res) {
//   var html = fs.readFileSync('./index.html').toString();
//   res.send(html);
// });

// app.use('/markdown', require('./router/mark.js'));

app.listen(PORT, function() {
  console.log('Express server listening on port', PORT)
});
