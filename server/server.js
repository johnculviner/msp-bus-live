var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../public'));
var port = process.env.PORT || 1337;
app.listen(port, function () {
    console.log('App started on ' + port);
});