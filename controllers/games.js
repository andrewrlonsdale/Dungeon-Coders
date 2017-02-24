var express = require('express');
var gameRouter = express.Router();

var GamesQuery = require('../client/db/gamesQuery');
var query = new GamesQuery();

gameRouter.get('/', function(req, res) {
  query.all(function(results) {
    res.json(results);
  });
});

module.exports = gameRouter;