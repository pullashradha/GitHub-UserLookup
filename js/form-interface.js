// var Account = require ("./../js/account.js").accountModule;

$(document).ready(function(event) {
  $("#name-form").submit(function(event) {
    event.preventDefault();
    var usernameInput = $("#username-input").val();
    $("#show-account").text(usernameInput);
  });
});
