var apiKey = require ("./../.env").apiKey;

var getUser = function(usernameInput) {
  $.get("https://api.github.com/users/" + usernameInput + "?access_token=" + apiKey).then(function(response) {
    $("#show-name").text(response.name);
    $("#repo-number").show();
    $("#show-repo-number").text(response.public_repos);
  }).fail(function(error) {
    $("#show-name").text(error.responseJSON.message);
  });
};

var getRepos = function(usernameInput) {
  $.get("https://api.github.com/users/" + usernameInput + "/repos?access_token=" + apiKey + "&per_page=100").then(function(response) {
    for (var i = 0; i < response.length; i ++)
    {
      if (response[i].description === null || response[i].description === "") {
        $("ul#show-repo").append("<li>" + response[i].name + "</li>");
      }
      else {
        $("ul#show-repo").append("<li>" + response[i].name + ": " + response[i].description + "</li>");
      }
    }
  }).fail(function(error) {
    $("#show-repo").text(error.responseJSON.message);
  });
};

exports.getUser = getUser;
exports.getRepos = getRepos;
