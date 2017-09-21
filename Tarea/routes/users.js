var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Hola amiguitso'});			/*Lee el jade*/
});



module.exports = router;
