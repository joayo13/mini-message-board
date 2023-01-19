var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/new', function(req, res, next) {
  res.render('new', {title: 'new entry', message:'hello'});
});

module.exports = router;