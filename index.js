require("dotenv").config();

var keys = require("/keys.js")

var spotify = new Spotify(keys.spotify);
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
            // show tweets
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