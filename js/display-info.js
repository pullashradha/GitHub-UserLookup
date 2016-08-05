//UI Functions for showing account info on web page
var showAccount = function(response) {
  if (response.name === null) {
    $("#show-name").text(response.login);
  } else {
    $("#show-name").text(response.name);
  }
  $("#show-url").text(response.html_url);
  $("#repo-number").show();
  $("#show-repo-number").text(response.public_repos);
  $("#following-header").show();
  $("#show-followers").text(response.followers);
  $("#show-following").text(response.following);
};

var showRepoList = function(response) {
  for (var i = 0; i < response.length; i ++)
  {
    if (response[i].description === null || response[i].description === "") {
      $("#show-repo-list").append("<li>" + response[i].name + "</li>");
    }
    else {
      $("#show-repo-list").append("<li>" + response[i].name + ": " + response[i].description + "</li>");
    }
  }
};

var showNameError = function(response) {
  $("#show-name").text(error.responseJSON.message);
};

var showRepoError = function(response) {
  $("#show-repo-list").text(error.responseJSON.message);
};

exports.accountModule = showAccount;
exports.repoModule = showRepoList;
exports.nameError = showNameError;
exports.repoError = showRepoError;
