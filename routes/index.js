var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/index', function(req, res, next) {
  res.render('index');
});

router.get('/gir', function(req, res, next) {
  res.render('gir');
});

router.get('/sardar', function(req, res, next) {
  res.render('sardar');
});

router.get('/festival', function(req, res, next) {
  res.render('festival');
});

router.get('/error', function(req, res, next) {
  res.render('error');
});


router.get('/rannutsav', function(req, res, next) {
  res.render('rannutsav');
});


router.get('/temple', function(req, res, next) {
  res.render('temple');
});
























module.exports = router;
