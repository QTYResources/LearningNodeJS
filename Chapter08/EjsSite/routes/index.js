var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }, function (err, stuff) {
    if (!err) {
      console.log(stuff)
      res.write(stuff)
      res.end()
    }
  });
});

module.exports = router;