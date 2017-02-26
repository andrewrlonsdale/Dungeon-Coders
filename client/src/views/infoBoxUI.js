var InfoBoxView = function(){

  this.textP = document.createElement('p');
  this.textP.id = "infobox-text"

  var closeButton = document.createElement('p');
  closeButton.id = 'infobox-close-button';
  closeButton.innerText = "X";
  closeButton.onclick = function() {
    this.div.style.display = 'none';
  }.bind(this);

  this.div = document.createElement('div');
  this.div.id = "infobox-div";
  this.div.appendChild(this.textP);
  this.div.appendChild(closeButton);
  document.body.appendChild(this.div);
};

InfoBoxView.prototype = {
  showWithText: function(text){
    this.textP.innerText = text;
    this.div.style.display = 'flex';
  },
  hide: function(){
    this.div.style.display = 'none';
  }
}

module.exports = InfoBoxView;

//     var games = document.querySelector("#games");
//     musicArray.forEach(function(infobox){

//       var infoBox = document.createElement("div")
//       infobox.id = "infobox"
//       albums.appendChild(infobox);

//       var title = document.createElement("p");
//       title.innerText = album.name + "\n";
//       infobox.appendChild(title);

//       var image = document.createElement("img");
//       image.src = image link;
//       image.width = 200;
//       title.appendChild(image);

//     })