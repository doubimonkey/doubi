var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	console.log(req.url);
  res.render('index', { title: 'WebSite' });
});

module.exports = router;
