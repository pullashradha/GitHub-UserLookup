var apiKey = require ("./../.env").apiKey;

var getRepos = function(usernameInput) {
  $.get("https://api.github.com/users/" + usernameInput + "?access_token=" + apiKey).then(function(response) {
    // console.log(response);
    console.log(response.name);
    console.log("Number of public repositories = " + response.public_repos);

  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};

exports.getRepos = getRepos;

// exports.accountModule = Account;
