var models = require('../models/models.js');

// Autoload (Middelware principal)

exports.load = function(req, res, next, quizId) {
	models.Quiz.findById(quizId).then(
		function(quiz)	{
			if (quiz) {
				req.quiz = quiz;
				next();
			} else {
				next(new Error('No existe quizId=' + quizId));
			}
		}
	).catch (function(error) {next(error);});
};


exports.index = function(req, res, next) {

	var search = {};

	if (req.query.search) {
		search = {pregunta: {
					like: "%" + req.query.search.replace(" ", '%') + "%"
				}}
	};

	var consulta = {
		where: search
	};

	models.Quiz.findAll(consulta).then(function(quizes){
			res.render('quizes/index', {quizes: quizes});
	});
	
};


exports.show = function(req,res) {
	res.render('quizes/show', {quiz: req.quiz});	
};


exports.answer = function(req,res) {
	var resultado = 'Incorrecto';
	if (req.query.respuesta === req.quiz.respuesta) {
		resultado = 'Correcto';
	};
	res.render('quizes/answer', {respuesta: resultado, quiz: req.quiz});
};

