var config = require('./config');
var x = require('./x');
var server = require('./server');

server(new x(config)).start();