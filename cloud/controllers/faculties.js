var Faculty = Parse.Object.extend('Faculty');

exports.index = function(req, res) {
	var Faculty = Parse.Object.extend('Faculty');
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

	// save	
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