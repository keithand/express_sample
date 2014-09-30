var http = require('http');
var auth = require("basic-auth-connect");
var express = require("express");

var app = express();

app.use(auth('username', 'password'));

app.post('/accounts', function(req, res, next){
  res.send('accounts');
});

app.get('/accounts/:username', function(req, res, next){
	//returns :username account information
});

http.createServer(app).listen(3000);
