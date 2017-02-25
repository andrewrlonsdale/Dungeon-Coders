var UI = require('./views/ui');

var app = function() {
  var ui = new UI();
  var select = document.getElementById('entry-select');
    select.onchange = ui.selectEntry.bind(ui);

    var button = document.getElementById('add-new-entry');
    button.onclick = ui.newEntryForm.bind(ui);
};

window.onload = app;
