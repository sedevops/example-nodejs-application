var http = require('http');
console.log('Response from nodejs');
var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Zero downtime deployment with vars: Hello" + process.env.DEMO);

});

var port = process.env.PORT || 3000;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
