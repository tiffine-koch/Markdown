'use strict'

var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res) {
  // var colors = ['blue','red','green','fuschia','pink','yellow','aqua'];
  var colors = [{name:'blue', shade: 'light?'},{name:'red', shade: 'light?'},{name:'green', shade: 'light?'},{name:'fuschia', shade: 'light?'},{name:'pink', shade: 'light?'},{name:'yellow', shade: 'light?'},{name:'aqua', shade: 'light?'}];

  res.render('index',
  {title: 'Whoa, Look at Me!!!',
   timestamp: Date.now(),
   paragraph: 'This is cool',
   colors: colors //passing in an array to iterate over
 }); //keys of object will be the variables in our template

});

module.exports = router;
