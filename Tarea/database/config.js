/*var connection = mysql.createConnection({
  			host     : 'localhost',
 			user     : 'root',
  			password : '',
  			database : 'proyecto'
		});
		connection.connect(function(err){
		if(!err) {
   		 console.log("Database is connected");
		} else {
    		console.log("Error while connecting with database");
		}
		});*/




var connection = {
  host     : 'localhost',
  user     : 'root',
  password : '189176791',
  database : 'proyecto'
};
/*connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});*/
module.exports = connection;