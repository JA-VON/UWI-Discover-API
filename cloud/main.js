 express = require('express');

var facultiesCtrl = require('cloud/controllers/faculties');
var departmentsCtrl = require('cloud/controllers/departments.js');
var sessionsCtrl = require('cloud/controllers/sessions.js');
// var projectsCtrl = require('cloud/controllers/projects.js');

 app = express();

// Global app configuration section
app.set('views', 'cloud/views');  // Specify the folder to find templates
app.set('view engine', 'ejs');    // Set the template engine
app.use(express.bodyParser());    // Middleware for reading request body

// This is an example of hooking up a request handler with a specific request
// path and HTTP verb using the Express routing API.
app.get('/hello', function(req, res) {
  res.render('hello', { message: 'Congrats, you just set up your app!' });
});

app.get('/faculties', facultiesCtrl.index);
app.get('/faculties/new', facultiesCtrl.new);
app.post('/faculties', facultiesCtrl.create);
app.get('/api/faculties', facultiesCtrl.indexJSON);


app.get('/departments', departmentsCtrl.index);
app.get('/departments/new', departmentsCtrl.new);
app.post('/departments', departmentsCtrl.create);
app.get('/api/departments', facultiesCtrl.indexJSON);

app.get('/projects/new', function(req, res) {
	res.render('projects/create');
});

app.post('/projects', function(req, res) {
	res.render('projects/all', {
		title: req.body.name,
		projects: [],
		message: 'No projects yet'
	});
});

app.get('/sessions', sessionsCtrl.index);
app.get('/sessions/new', sessionsCtrl.new);
app.post('/sessions/create', sessionsCtrl.create);

// // Example reading from the request query string of an HTTP get request.
// app.get('/test', function(req, res) {
//   // GET http://example.parseapp.com/test?message=hello
//   res.send(req.query.message);
// });

// // Example reading from the request body of an HTTP post request.
// app.post('/test', function(req, res) {
//   // POST http://example.parseapp.com/test (with request body "message=hello")
//   res.send(req.body.message);
// });

// Attach the Express app to Cloud Code.
app.listen();

// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});
