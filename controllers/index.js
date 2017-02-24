var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/api/games', require('./games'));

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../client/src/views/index.html'));
});

router.get('/about', function(req, res){
  res.json({data: "More than you ever wished to know about computer gaming"});
});

module.exports = router;