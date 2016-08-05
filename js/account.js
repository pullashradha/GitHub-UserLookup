var apiKey = require ("./../.env").apiKey;

var getUser = function(usernameInput) {
  $.get("https://api.github.com/users/" + usernameInput + "?access_token=" + apiKey).then(function(response) {
    $("#show-name").text(response.name);
    $("#show-repo-number").text("Number of public repositories = " + response.public_repos);
  }).fail(function(error) {
    console.log (error.responseJSON.message);
  });
};

var getRepos = function(usernameInput) {
  $.get("https://api.github.com/users/" + usernameInput + "/repos?per_page=1000access_token=" + apiKey).then(function(response) {
    for (var i = 0; i < response.length; i ++)
    {
      $("#show-repo").append("<li>" + response[i].name + ": " + response[i].description + "</li>");
    }
  }).fail(function(error) {
    console.log (error.responseJSON.message);
  });
};

exports.getUser = getUser;
exports.getRepos = getRepos;
