var apiKey = require ("./../.env").apiKey;

var getRepos = function(usernameInput) {
  $.get("https://api.github.com/users/" + usernameInput + "/repos?access_token=" + apiKey).then(function(response) {
    console.log(response);
    for (var i = 0; i < response.length; i ++)
    {
      console.log(response[i].name);
      console.log(response[i].description);
    }
    // console.log(response.name);
    // console.log("Number of public repositories = " + response.public_repos);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};

exports.getRepos = getRepos;

// exports.accountModule = Account;
