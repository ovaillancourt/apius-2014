var http = require('http');

var app = http.createServer(function(req, res){
  if(req.url === '/page'){
    res.write('bob');
    res.end();
  } else if( req.url === '/'){
    res.write('hello world');
    res.end();
  }


});

app.listen(3000);