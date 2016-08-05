var apiKey = require ("./../.env").apiKey;

var showAccount = function(response) {
  $("#show-name").text(response.name);
  $("#repo-number").show();
  $("#show-repo-number").text(response.public_repos);
};

var showRepoList = function(response) {
  for (var i = 0; i < response.length; i ++)
  {
    if (response[i].description === null || response[i].description === "") {
      $("#show-repo").append("<li>" + response[i].name + "</li>");
    }
    else {
      $("#show-repo").append("<li>" + response[i].name + ": " + response[i].description + "</li>");
    }
  }
};

var showNameError = function(response) {
  $("#show-name").text(error.responseJSON.message);
};

var showRepoError = function(response) {
  $("#show-repo").text(error.responseJSON.message);
};




var getUser = function(usernameInput) {
  if (apiKey) {
    $.get("https://api.github.com/users/" + usernameInput + "?access_token=" + apiKey).then(function(response) {
      showAccount(response);
    }).fail(function(error) {
      showNameError(response);
    });
  } else {
    $.get("https://api.github.com/users/" + usernameInput).then(function(response) {
      showAccount(response);
    }).fail(function(error) {
      showNameError(response);
    });
  }
};

var getRepos = function(usernameInput) {
  $("#show-repo").text("");
  if (apiKey) {
    $.get("https://api.github.com/users/" + usernameInput + "/repos?access_token=" + apiKey + "&per_page=100").then(function(response) {
      showRepoList(response);
    }).fail(function(error) {
      showRepoError(response);
    });
  } else {
    $.get("https://api.github.com/users/" + usernameInput + "/repos?per_page=100").then(function(response) {
      showRepoList(response);
    }).fail(function(error) {
      showRepoError(response);
    });
  }
};

exports.getUser = getUser;
exports.getRepos = getRepos;
