var mysql = require('mysql');

module.exports = {
	
	getCreate : function(req,res,next){
		return res.render('aca/formulario');
	},

	postCreate: function(req,res,next){

		
		var user = {
			email : req.body.email,
			nombre : req.body.nombre,
			password : req.body.password
		};
		
		var config = require('.././database/config');

		var db=mysql.createConnection(config);

		db.connect();
		db.query('INSERT INTO usuario SET ?',user,function(err,rows,fields){
			if(err) throw err;
			console.log("agregados");
			db.end();
		})
		req.flash('info', 'Se ha registrado correctamente');
		return res.redirect('/inicio');

	},

	getInicio : function(req,res,next){
		return res.render('aca/inicio', {message: req.flash('info'), authmessage : req.flash('authmessage')});
	},


	logout : function(req,res,next){
		req.logout();
		res.redirect('/inicio');
	},

	perfil : function(req,res,next){
		res.render('perfil', {
			isAuthenticated : req.isAuthenticated(),
			user : req.user
		})
	},

	Sesion : function(req,res,next){
		return res.render('Sesion',{title : ' Nueva sesion'});
	}





};