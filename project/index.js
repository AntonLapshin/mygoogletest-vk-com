var http = require('http'),
    fs = require('fs'),
    app = require('./app'),
    port = Number(process.env.PORT || 8080);

http.createServer(app.handler).listen(port);

console.log('Google test http: ' + port);

