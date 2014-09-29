var express = require('express'),
	port = 3000;

var root = __dirname + '/public';

var app = express();

app.get('/', function(req,res){ res.send('hello world!'); });

app.use(function(req, res, next){
	console.log('hello from the middleware!');
	next();
});

app.use(function(req, res, next){
	console.log('doing async stuff...');
	setTimeout(function(){
		console.log('done!');
		next();
	}, 1000);
});

app.get('/:name', function(req, res){
	res.send('hello, ' + req.params.name);
});

//easier code with express to set messages when an action is executed. 
/* app.get('/', function(req,res){res.send('get request'); });
app.post('/', function(req,res){res.send('post request'); });
app.put('/', function(req,res){res.send('patch request'); });
app.patch('/', function(req,res){res.send('get request'); });
app.delete('/', function(req,res){res.send('delete request'); });
*/




app.listen(port, function(){
	console.log('listening on port ' + port);
});
