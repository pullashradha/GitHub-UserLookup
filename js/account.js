var apiKey = require ("./../.env").apiKey;

var getUser = function(usernameInput) {
  $.get("https://api.github.com/users/" + usernameInput + "?access_token=" + apiKey).then(function(response) {
    console.log (response.name);
    console.log ("Number of public repositories = " + response.public_repos);
  }).fail(function(error) {
    console.log (error.responseJSON.message);
  });
};

var getRepos = function(usernameInput) {
  $.get("https://api.github.com/users/" + usernameInput + "/repos?page=2&per_page=1000access_token=" + apiKey).then(function(response) {
    for (var i = 0; i < response.length; i ++)
    {
      console.log (response[i].name);
      console.log (response[i].description);
    }
  }).fail(function(error) {
    console.log (error.responseJSON.message);
  });
};

exports.getUser = getUser;
exports.getRepos = getRepos;
