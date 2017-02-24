var MongoClient = require('mongodb').MongoClient;

var GamesQuery = function(){
  this.url = 'mongodb://localhost:27017/the_dungeon';
}

GamesQuery.prototype = {
  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      var games = db.collection('games');
      games.find().toArray(function(err, docs){
        onQueryFinished(docs);
      });
    });
  }
}

module.exports = GamesQuery;