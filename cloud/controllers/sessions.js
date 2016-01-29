
exports.index = function(req, res) {
	res.render('sessions/all', {
		sessions: [],
		message: 'No sessions available' 
	});
};

exports.new = function(req, res) {
	res.render('sessions/create');
};

exports.create = function(req, res) {
	// TODO save
};