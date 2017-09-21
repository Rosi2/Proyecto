var express = require('express');
var router = express.Router();
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

router.get('/', function(req, res, next) {
  res.render('chat');			/*Lee el jade*/
});




module.exports = router;