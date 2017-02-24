var MongoClient = require('mongodb').MongoClient;

var GamesQuery = function () {
  this.url = 'mongodb://localhost:27017/the_dungeon';
};

GamesQuery.prototype = {
  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('games');
        collection.find().toArray(function(err, docs){
        onQueryFinished(docs);
        });
      }
    })
  },


  addGame: function(newGame, callback){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('games');
        collection.insert(newGame);
        collection.find().toArray(function(err, docs){
          callback(docs);
        });
      }
    });
  },

  updateGame: function(updatedDetails, index, callback){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('games');
        collection.find().toArray(function(err, docs){
          var gameToBeUpdated = docs[index];
          var updatedGame = gameToBeUpdated;

          for(var detail in updatedDetails){
            updatedGame[detail] = updatedDetails[detail];
          }

          collection.update(gameToBeUpdated, updatedGame);
          callback(docs);
        });
      }
    });
  },

  deleteGame: function(index, callback){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('games');
        collection.find().toArray(function(err, docs){
          var gameToBeDeleted = docs[index];

          collection.remove(gameToBeDeleted);
          callback(docs);
        });
      }
    });
  }
}

module.exports = GamesQuery;