var express = require('express');
var app = express();
app.use(express.static(__dirname + '/Public')); //__dir and not _dir
var port = 1993;
app.listen(port);
console.log('server on ' + port);