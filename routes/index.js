var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');


router.param('quizId', quizController.load);

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});


router.get('/author', function(req, res){
	res.render('autor');
});

router.get('/quizes', quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show); // quizController.show
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

module.exports = router;
