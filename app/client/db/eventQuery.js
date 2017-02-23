var MongoClient = require('mongodb').MongoClient;

var EventQuery = function () {
  this.url = 'mongodb://localhost:27017/the_dungeon';
};

eventQuery.prototype = {
  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection_0 = db.collection('games');
        var collection_1 = db.collection('platforms');
        collection.find().toArray(function(err, docs){
        onQueryFinished(docs);
        });
      }
    });
  }
}

module.exports = BookQuery;