var GameDataRequester = require('../models/gameDataRequester')

var UI = function(){
  var gameDataRequester = new GameDataRequester();
  gameDataRequester.all(function(results){
    this.render(results);
  }.bind(this));
}

UI.prototype = {


  render: function(games){
    var container = document.querySelector('#games');
    games.forEach(function(game){

      var h3 = document.createElement('h3');
      h3.setAttribute("value", game.tag);
      h3.innerText= game.year;
      container.appendChild(h3);

      var container5 = document.querySelector('#games');
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
      p3.innerText= game.desc;

      p.setAttribute("id", game.tag);
      this.appendText(p, game.console, "");
      this.appendText(p, game.HardwareSpec, "");
      this.appendText(p, game.UnitSales, "");
      this.appendText(p, game.desc, "");

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