var http = require('http');
var basicAuth = require("connect-basic-auth");
var express = require("express");
	//port = 3000;


var app = express();


/*.createServer(function(req, res){
	res.writeHead(200);
	res.end("I hope this finally works!");
}).listen(3000);
*/

app.use(basicAuth(function(credentials, req, res, next){
		Account.authenticate(credentials, function(error){
			next(error);
		});
	}, 'Please enter your credentials.'));

app.post('/accounts', function(req, res, next){

});

app.all('*', function(req, res, next){
	req.requireAuthorization(req, res, next);
});

app.get('/accounts/:username', function(req, res, next){
	//returns :username account information
});

http.createServer(app).listen(3000);