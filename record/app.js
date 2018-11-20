var http = require('http');
var port = 8080;

http.createServer(function (request, response) {
    response.write('hello');
    response.end();
}).listen(port);
console.log('listening at localhost:' + port + ' ...');
