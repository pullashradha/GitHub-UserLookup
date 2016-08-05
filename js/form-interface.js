// var Account = require ("./../js/account.js").accountModule;
var getRepos = require ("./../js/account.js").getRepos;
var apiKey = require ("./../.env").apiKey;

$(document).ready(function(event) {
  $("#username-form").submit(function(event) {
    event.preventDefault();
    var usernameInput = $("#username-input").val();
    $("#show-account").text(getRepos);
  });
});
