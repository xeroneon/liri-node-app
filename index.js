require("dotenv").config();

var keys = require("./keys");

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');

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

    switch (response.command) {
        case "Show my tweets":
            client.get('statuses/user_timeline', { user_id: "xeroneon12", count: 20 }, function (error, tweets, response) {
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
                spotify.search({ type: 'track', query: response.song }, function (err, data) {
                    if (err) {
                        return console.log('Error occurred: ' + err);
                    }

                    //   console.log(data.tracks.items[0]);
                    console.log("Song Name: ", data.tracks.items[0].name);
                    console.log("Album Name: ", data.tracks.items[0].album.name);
                    console.log("Artists: ", data.tracks.items[0].artists[0].name);
                    console.log("Link: ", data.tracks.items[0].preview_url);

                });
            })
            break;
        case "Find a movie":
            inquirer.prompt([
                {
                    type: "input",
                    name: "movie",
                    message: "What movie would you like to search?",
                }

            ]).then((userInput) => {
                request('http://www.omdbapi.com/?apikey=trilogy&t=' + userInput.movie, function (error, response, body) {
                    // console.log(userInput.movie)
                    // console.log('error:', error); // Print the error if one occurred
                    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                    const movieData = JSON.parse(body);
                    // console.log(movieData);
                    console.log("Title: " + movieData.Title);
                    console.log("Year Released: " + movieData.Year);
                    console.log("IMDB Rating: " + movieData.Ratings[0].Value);
                    console.log("Rotten Tomatoes Rating: " + movieData.Ratings[1].Value);
                    console.log("Country: " + movieData.Country);
                    console.log("Language: " + movieData.Language);
                    console.log("Plot: " + movieData.Plot);
                    console.log("Actors: " + movieData.Actors);
                });
            })
            break;
        case "Do what it says":
            //do what the text says
            break;

    }


});