var express = require('express');
var platformRouter = express.Router();

var PlatformsQuery = require('../client/db/platformsQuery');
var query = new PlatformsQuery();

platformRouter.get('/', function(req, res) {
  query.all(function(results) {
    res.json(results);
  });
});

module.exports = platformRouter;