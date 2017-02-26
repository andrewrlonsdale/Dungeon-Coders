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
      // var image = document.createElement('img');
      // this.appendText(li, game.console, "console: ");
      this.appendText(li, game.year, "");
      // this.appendText(li, game.HardwareSpec, "Hardware Spec: ");
      // this.appendText(li, game.UnitSales, "unit sales: ");
      // this.appendText(li, game.copy, "copy: ");
      // image.src = game.img;     
      // li.appendChild(image);
      container.appendChild(li);
    }.bind(this));
  },

  // render2: function(games){
  //   var container = document.querySelector('#explain');
  //   games.forEach(function(game){
  //     var li = document.createElement('li');
  //     this.appendText(li, game.year, "year: ");
  //     container.appendChild(li);
  //   }.bind(this));
  // },
}


module.exports = UI;

