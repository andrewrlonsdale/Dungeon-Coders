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
      var li = document.createElement('li');
      var button = document.createElement('button');
      var image = document.createElement('img');
      li.setAttribute("value", game.tag);
      button.setAttribute("value", game.tag);
      image.setAttribute("value", game.tag);

      this.appendText(li, game.year, "");

      var total = 10;
      for(var i = 0; i < total; i++){ 
        var br = document.createElement("br");
        li.appendChild(br);   
      };


      var container2 = document.querySelector('#head');
      var p = document.createElement('p');
      p.setAttribute("class", "_" + game.tag);
      this.appendText(p, game.console, "");

      container2.appendChild(p);


      var container3 = document.querySelector('#foot');
      var p = document.createElement('p');
      p.setAttribute("class", "_" + game.tag);
      this.appendText(p, game.year, "");

      container3.appendChild(p);


      var container4 = document.querySelector('#body');
      var p = document.createElement('p');
      p.setAttribute("class", "_" + game.tag);
      this.appendText(p, game.console, "");
      this.appendText(p, game.HardwareSpec, "");
      this.appendText(p, game.UnitSales, "");
      this.appendText(p, game.copy, "");

      container4.appendChild(p);

      image.src = game.img;  
      li.appendChild(image);
      container.appendChild(li);

      // Get the modal
      var modal = document.getElementById('myModal');
      
          // console.log("we're here", p)

          // COMMENT ME BACK ONCE I'M REFACTORED
      // var resetModal = function(){
      //   var modalChildren = modal.getElementsByTagName("div")
      //   for(var div of modalChildren){
      //     var pTags = div.getElementsByTagName("p")
      //     for(var pTag of pTags){
      //       pTag.style.display = "none";
      //     }
      //   }
      // }

      image.onclick = function() {
        // resetModal();
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