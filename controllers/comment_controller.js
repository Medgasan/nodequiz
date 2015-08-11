var models = require('../models/models.js');

//GET /quizes/:quizId/comments/new
exports.new = function(req, res) {
	res. render('comments/new.ejs', {quizId: req.params.quizId, errors: {}});
};

// POST /quizes/:quizId/comments
exports.create = function(req, res){
	var comment = models.Comments.build(
		{ 	
			texto: req.body.comment.exto,
			quizId: req.params.quizId
		}
	);

	comments
	.validate()
	.then(
		function(err){
			if (err){
				res.render('comments/new.ejs', {comment: comment, errors: errors})
			} else {
				comment
				.save()
				.then(function() {res.redirect('/quizes/'+req.params.quizId)})
			}
		}).catch(function(error){next(error)})
};