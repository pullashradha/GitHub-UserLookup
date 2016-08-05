var getUser = require ("./../js/account.js").getUser;
var getRepos = require ("./../js/account.js").getRepos;

$(document).ready(function(event) {
  $("#username-form").submit(function(event) {
    event.preventDefault();
    var usernameInput = $("#username-input").val();
    $("#show-repo-list").text(""); //Resets getRepos() to blank every time submit btn is entered
    getUser(usernameInput);
    getRepos(usernameInput);
  });
});
