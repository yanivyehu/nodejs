var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("root");
});

router.get('/book/:id', function(req, res, next) {
  console.log(req.originalUrl)
});

router.get('/books', function(req, res, next) {
  console.log(req.originalUrl)
});

router.post('/book/create', function(req, res, next) {
    console.log(req.originalUrl);
});

router.post('/book/:id/update', function(req, res, next) {
    console.log(req.originalUrl);
});

router.delete('/book/:id/delete', function(req, res, next) {
    console.log(req.originalUrl)
});



module.exports = router;
