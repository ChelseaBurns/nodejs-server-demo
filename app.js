var http = require('http'),
    host = '123.0.0.1',
    port = '9000';

var server = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type' : 'text/html'});
  res.end('')
}).listen(port, host, function() {
	console.log('Server Runnng on http://' + host + ':' + port);
})


