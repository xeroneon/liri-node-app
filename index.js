require("dotenv").config();

var keys = require("./keys");

var Twitter = require('twitter');

// var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var inquirer = require("inquirer");

inquirer.prompt([

    {
      type: "list",
      name: "command",
      message: "What would you like liribot to do?",
      choices: ["Show my tweets", "Spotify a song", "Find a movie", "Do what it says"]
    }
  

  ]).then((response) => {
  
    switch(response.command) {
        case "Show my tweets":
        client.get('statuses/user_timeline', {user_id: "xeroneon12", count: 20}, function(error, tweets, response) {
            if (!error) {
              for (let i = 0; i < tweets.length; i++) {
                  console.log(tweets[i].text);
                  console.log("================================");
              }
            }
          });
        break;
        case "Spotify a song":
            inquirer.prompt([
                {
                    type: "input",
                    name: "song",
                    message: "What song would you like to search?",
                }

            ]).then((response) => {
                //search song
            })
        break;
        case "Find a movie":
            //find mpvie
        break;
        case "Do what it says":
            //do what the text says
        break;

    }

  
  });