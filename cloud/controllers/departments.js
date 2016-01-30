var _ = require('underscore');
var Department = Parse.Object.extend('Department');

exports.index = function(req, res) {
	var query = new Parse.Query(Department);

	query.descending('createdAt');
	query.find().then(function(results) {
		res.render('departments/all', {departments: results});
	}, function() {
		res.render(500, 'Failed to load departments');
	});
};

exports.new = function(req, res) {
	var Faculty = Parse.Object.extend('Faculty');

	var facultyQuery = new Parse.Query(Faculty);
	facultyQuery.descending('createdAt');
	facultyQuery.find()
		.then(function(results) {
			console.log('departments: ' + results);
			res.render('departments/create', {
				faculties: results
			});
		}, function() {
			res.render('departments/create', {
				faculties: []
			});
		});
};

exports.create = function(req, res) {
	var department = new Department();

	// var Faculty = Parse.Object.extend('Faculty');
	// TODO retreive Faculty object with specified name

	department.save(_.pick(req.body, 'name', 'number', 'email', 'hod', 'faculty'))
		.then(function() {
			res.redirect('/departments');
		});
};

exports.indexJSON = function(req, res) {
	var query = new Parse.Qeury(Department);

	query.descending('createdAt');
	query.find().then(function(results) {
		res.json(results);
	});

}