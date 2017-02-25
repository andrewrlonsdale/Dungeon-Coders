var GameDataRequester = require('../models/gameDataRequester')

var UI = function(){
  var gameDataRequester = new GameDataRequester();
  gameDataRequester.all(function(results){
    this.render(results);
  }.bind(this));

  var platform_event = document.getElementById("platfom_event");
  console.log(platform_event);
  platform_event.addEventListener("click", this.platform_event);

}

UI.prototype = {
  createText: function(text, label){
    var p = document.createElement('p');
    p.innerText = label + text;
    return p;
  },

  handleResgisterButtonClick: function(){
    new infoBoxUI();
  },

  handleButtonClick: function(){
    var infoBoxButton = document.createElement('button');
    infoBoxButton.innertext = "Console";
    div.appendChild(infoBoxButton);
    registerButton.onclick = this.handleRegisterButtonClick;
  },

  appendText: function(element, text, label){
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  render: function(games){
    var container = document.querySelector('#games');
    games.forEach(function(game){
      var li = document.createElement('li');
      var image = document.createElement('img');
      this.appendText(li, game.console, "console: ");
      this.appendText(li, game.year, "year: ");
      this.appendText(li, game.HardwareSpec, "Hardware Spec: ");
      this.appendText(li, game.UnitSales, "unit sales: ");
      this.appendText(li, game.copy, "copy: ");
      image.src = game.img;     
      li.appendChild(image);
      container.appendChild(li);

    }.bind(this));
  },
}

module.exports = UI;

