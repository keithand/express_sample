var express = require('express'),
	port = 3000;

var app = express();

app.set('view engine', 'ejs');

app.get('/:name/:last', function(req, res){
	res.render('greeting.ejs',
		{name: req.params.name,
		last: req.params.last});
		console.log(req.params);
});

app.listen(port, function(){
	console.log('listening on port ' + port);
});