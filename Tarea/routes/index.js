
var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var controllers = require ('.././Controllers'); //importar todos los controlladores 
var passport = require('passport');
var AuthMiddleware = require ('.././middleware/auth');

//router.use(cookieParser());
//router.use(cookieSession({secret : "secreto"}));

router.get('/',controllers.HomeControllers.index);

router.get('/formulario', controllers.UserController.getCreate);
router.post('/formulario', controllers.UserController.postCreate);
router.get('/inicio', controllers.UserController.getInicio);
router.post('/inicio', passport.authenticate('local',{
	successRedirect : 'perfil',
	failureRedirect : 'inicio',
	failureFlash : true
}));
router.get('/logout', controllers.UserController.logout);
router.get('/perfil',AuthMiddleware.isLogged ,controllers.UserController.perfil);


router.get('/Sesion', AuthMiddleware.isLogged, controllers.UserController.Sesion);
router.get('/Crearsesion',  controllers.UserController.CreateSession);


/* GET home page. */
/*router.get('/', function(req, res, next) {
  req.session.visitas || (req.session.visitas=0)
  	
  	let n = req.session.visitas++
 
	res.render('index', { title: 'Hola amiguitso, me has visitado '+ n +' veces'});
});*/




module.exports = router;
