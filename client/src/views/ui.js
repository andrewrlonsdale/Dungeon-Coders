var TreeHandler = require('./treeHandler');
var GameDataRequester = require('../models/gameDataRequester');
var treeHandler = new TreeHandler();

var UI = function(){
  var gameDataRequester = new GameDataRequester();
  gameDataRequester.all(function(results){
    this.render(results);
  }.bind(this));
  treeHandler.cloudTrees('tree', 'forest', 400, 0, -450);
  treeHandler.cloudTrees('cloud', 'forest', 50, -500, -1000);
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
      var image = document.createElement('img');
      image.setAttribute("value", game.tag);
      image.src = game.img;  
      container5.appendChild(image);

      var container2 = document.querySelector('#head');
      var p = document.createElement('p');
      p.setAttribute("class", "_" + game.tag);
      p.innerText= game.console;

      container2.appendChild(p);


      var container3 = document.querySelector('#foot');
      var p = document.createElement('p');
      p.setAttribute("class", "_" + game.tag);
      p.innerText= game.year;
      container3.appendChild(p);


      var container4 = document.querySelector('#body');
      var p = document.createElement('p');
      var p2 = document.createElement('p');
      var p3 = document.createElement('p');

      p.innerText= game.HardwareSpec;
      p2.innerText= game.UnitSales;
      p3.innerText= game.copy;

      p.setAttribute("class", "_" + game.tag);
      p2.setAttribute("class", "_" + game.tag);
      p3.setAttribute("class", "_" + game.tag);
      
      container4.appendChild(p);
      container4.appendChild(p2);
      container4.appendChild(p3);

      

      // Get the modal
      var modal = document.getElementById('myModal');
      var resetModal = function(){
        var modalChildren = modal.getElementsByTagName("div")
        for(var div of modalChildren){
          var pTags = div.getElementsByTagName("p")
          for(var pTag of pTags){
            pTag.style.display = "none";
          }
        }
      }

      image.onclick = function() {
        resetModal();
        modal.style.display = "block";
        if(game.tag === image.getAttribute("value")) {
         var modalChildren = modal.getElementsByTagName("div")
         for(var div of modalChildren){
          var pTags = div.getElementsByTagName("p")
          for(var pTag of pTags){
            if(pTag.getAttribute("class") === "_" + game.tag){
              pTag.style.display = "block";
            }
          }
        }
      }
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";

    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }


  }.bind(this));
  },

};

module.exports = UI;