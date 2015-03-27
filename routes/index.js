var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //res.render('index.html');
});

router.get('/elements.json', function(req, res) {
	res.writeHead(200, {
	  'Cache-Control': 'no-cache'
	});
});

module.exports = router;
