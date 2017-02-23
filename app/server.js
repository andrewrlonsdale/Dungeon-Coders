var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));

app.use(require('./controllers'));

app.use(express.static('public'));

app.listen(3000, function(){
  console.log("App is listening on " + this.address().port);
});