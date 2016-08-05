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

exports.accountModule = showAccount;
exports.repoModule = showRepoList;
exports.nameError = showNameError;
exports.repoError = showRepoError;
