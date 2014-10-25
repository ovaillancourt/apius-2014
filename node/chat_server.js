var net = require('net');

var sockets = [];

var app = net.createServer(function(socket){
  sockets.push(socket);

  socket.on('data', function(data){
    for(var i = 0; i < sockets.length; ++i){
      sockets[i].write(data);
    }
  });

  socket.on('end', function(){
    var index = sockets.indexOf(socket);
    sockets.splice(index, 1);
  });
});

app.listen(3000);