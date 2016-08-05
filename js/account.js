var apiKey = require ("./../.env").apiKey;
var showAccount = require ("./../js/display-info.js").accountModule;
var showRepoList = require ("./../js/display-info.js").repoModule;
var showNameError = require ("./../js/display-info.js").nameError;
var showRepoError = require ("./../js/display-info.js").repoError;

var getUser = function(usernameInput) {
  if (apiKey) {
    $.get("https://api.github.com/users/" + usernameInput + "?access_token=" + apiKey).then(function(response) {
      console.log(response);
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
