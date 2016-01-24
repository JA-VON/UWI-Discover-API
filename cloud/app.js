
// These two lines are required to initialize Express in Cloud Code.
 express = require('express');
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

app.get('/faculties', function(req, res) {
	var Faculty = Parse.Object.extend('Faculty');
	var query = new Parse.Query(Faculty);

	query.descending('createdAt');
	query.find().then(function(results) {
		res.render('faculties/all', { faculties: results });
	}, function() {
		res.render(500, 'Failed to load faculties');
	});

	query.find({
		success: function(results) {
			
		},
		error: function(err) {
			alert("Error: " + err.code + " " + error.message);
		}
	})
});

app.get('/faculties/create', function(req, res) {
	res.render('faculties/create');
});

app.post('/faculties', function(req, res) {
	// TODO
});

app.get('/departments', function(req, res) {
	res.render('departments/all', {
		departments: []
	})
});

app.get('/departments/create', function(req, res) {
	res.render('departments/create');
});

app.post('/departments', function(req, res) {
	// TODO
});

app.get('/projects/create', function(req, res) {
	res.render('projects/create');
});

app.post('/projects', function(req, res) {
	res.render('projects/all', {
		title: req.body.name,
		projects: [],
		message: 'No projects yet'
	});
});

app.get('/sessions', function(req, res) {
	res.render('sessions/all', {
		sessions: [],
		message: 'No sessions available' 
	});
});

app.post('/sessions/create', function(req, res) {
	res.render('sessions/create')
});

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
