var _ = require('underscore');

var Faculty = Parse.Object.extend('Faculty');

exports.index = function(req, res) {
	var query = new Parse.Query(Faculty);

	query.descending('createdAt');
	query.find().then(function(results) {
		res.render('faculties/all', { faculties: results });
	}, function() {
		res.render(500, 'Failed to load faculties');
	});
};

exports.new = function(req, res) {
	res.render('faculties/create');
};

exports.create = function(req, res) {
	var faculty = new Faculty();

	faculty.save(_.pick(req.body, 'name', 'number', 'dean'))
		.then(function() {
			res.redirect('/faculties');
		})
};

exports.indexJSON = function(req, res) {
	var query = new Parse.Query(Faculty);

	query.descending('createdAt');
	query.find().then(function(results) {
		console.log("faculties: " + JSON.stringify(results));
		res.json(results);
	});
};

exports.show = function(req, res) {
	var facultyQuery = new Parse.Query(Faculty);
	var foundFaculty;

	facultyQuery.get(req.params.id).then(function(faculty) {
		if (faculty) {
			foundFaculty = faculty;

		}
	}).then(function() {
		// res.render('faculties/show', {
		// 	faculty: foundFaculty
		// });
	});
};