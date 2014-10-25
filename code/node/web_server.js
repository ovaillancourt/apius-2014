var http = require('http');

var app = http.createServer(function(req, res){

  setTimeout(function(){
    res.write('world');
    res.end();
  }, 2000);

  res.write('hello');
});

app.listen(3000);