var apiKey = require ("./../.env").apiKey;
var getUser = require ("./../js/account.js").getUser;
var getRepos = require ("./../js/account.js").getRepos;

$(document).ready(function(event) {
  $("#username-form").submit(function(event) {
    event.preventDefault();
    var usernameInput = $("#username-input").val();
    getUser(usernameInput);
    getRepos(usernameInput);
  });
});
