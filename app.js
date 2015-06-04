//bring in the express module
var express = require('express');

//call the express function, return an obejct
var app = express();

//we need to set the view engine to ejs so that we can make multiple routes
app.set('view engine', 'ejs');

//
app.get('/', function(request, response){
  //response.send("Hello World");
  var name = 'Elie';
  response.render('index', {personName:name});
});

app.get('/person/:name', function(request, response){
	var person = request.params.name;
	response.render('person', {specificPerson:person});
});

app.get('/math/add/:num1/:num2', function(request, response){
	var sum = parseInt(request.params.num1) + parseInt(request.params.num2);
	response.render('math', {number:sum});
});

app.get('/math/sub/:num1/:num2', function(request, response){
	var sum = parseInt(request.params.num1) - parseInt(request.params.num2);
	response.render('math', {number:sum});
});

app.get('/math/div/:num1/:num2', function(request, response){
	var sum = parseInt(request.params.num1) / parseInt(request.params.num2);
	response.render('math', {number:sum});
});

app.get('/math/mult/:num1/:num2', function(request, response){
	var sum = parseInt(request.params.num1) * parseInt(request.params.num2);
	response.render('math', {number:sum});
});

//localhost:3000/

app.listen(3000, function(){
	console.log('server starting on port 3000');
});