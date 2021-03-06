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
      li.setAttribute("value", game.tag);
      image.setAttribute("value", game.tag);

      this.appendText(li, game.year, "");

      image.src = game.img;  
      li.appendChild(image);
      container.appendChild(li);

      var container2 = document.querySelector('#head');
      var p = document.createElement('p');
      p.setAttribute("class", "_" + game.tag);
      p.setAttribute("id", "pop");
      p.innerText= game.name;

      container2.appendChild(p);

      var container4 = document.querySelector('#body');
      var p = document.createElement('p');
      var p2 = document.createElement('p');
      var p3 = document.createElement('p');
      var p4 = document.createElement('p');

      var iframe = document.createElement('iframe');

      p.innerText= "Details: " + game.details;
      p2.innerText= "Sales: "+ game.unitSales;
      p3.innerText= "Description: " + game.desc;

      p.setAttribute("id", "pop");
      p2.setAttribute("id", "pop");
      p3.setAttribute("id", "pop");

      p.setAttribute("class", "_" + game.tag);
      p2.setAttribute("class", "_" + game.tag);
      p3.setAttribute("class", "_" + game.tag);
      p4.setAttribute("class", "_" + game.tag);
      iframe.setAttribute("class", "tube");
      iframe.setAttribute("width", "1000px");
      iframe.setAttribute("height", "300");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "true");
      iframe.setAttribute("border", "0");
      
      

      iframe.src = game.vid;  
      container4.appendChild(p);
      container4.appendChild(p2);
      container4.appendChild(p3);
      container4.appendChild(p4);
      p4.appendChild(iframe);
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
        var audio = document.getElementById("myAudio");
        audio.pause();
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
      var audio = document.getElementById("myAudio");
      audio.play();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        var audio = document.getElementById("myAudio");
        audio.play();
      }
    }


  }.bind(this));
  },

};



module.exports = UI;