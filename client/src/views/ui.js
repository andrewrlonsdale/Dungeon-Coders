var GameDataRequester = require('../models/gameDataRequester')

var UI = function(){
  var gameDataRequester = new GameDataRequester();
  gameDataRequester.all(function(results){
    this.render(results);
  }.bind(this));
}

UI.prototype = {
  createText: function(text, label){
    var p = document.createElement('p');
    p.innerText = label + text;
    return p;
  },

  appendText: function(element, text, label){
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  render: function(games){
    var container = document.querySelector('#games');
    games.forEach(function(game){
      var li = document.createElement('li');
      this.appendText(li, game.platforms, "platforms: ");
      this.appendText(li, game.title, "console: ");
      this.appendText(li, game.developers, "year: ");
      this.appendText(li, game.image, "img: ");
      this.appendText(li, game.music, "music: ");
      container.appendChild(li);
    }.bind(this));
  },
}

module.exports = UI;

