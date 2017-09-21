var http = require('http');

var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
//var con = require('/config.js');





/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('formulario', { title: 'Rellenar formulario '});
});




module.exports = router;
