var io = require('socket.io')();

io.on('connection', function(socket){  
  console.log('a user connected');

  socket.on('new message', function(msg){
    console.log('new message: ' + msg);
    app.io.emit('chat message', msg);
  });
});

module.exports = io;