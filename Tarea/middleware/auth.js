
//envia a inicio si alguien quiere ingresar a una ruta no permitida


module.exports = {

	isLogged : function(req, res, next){
		if(req.isAuthenticated()){
			next();
		}else{
			res.redirect('inicio');
		}
	}

}