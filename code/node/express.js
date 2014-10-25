//Installer express avec "npm install express".
var express = require('express');

var app = express();

app.get('/page', function(req, res){
  res.send('hello world - page');
});

app.get('/', function(req, res){
  res.send('hello world - root');
});

app.listen(3000);