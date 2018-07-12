require("dotenv").config();

var fs = require("fs");

const keys = require("./keys");

const Twitter = require('twitter');
const Spotify = require('node-spotify-api');
const request = require('request');

const spotify = new Spotify(keys.spotify);
const client = new Twitter(keys.twitter);

let command = process.argv[2];
const argumentArr = [];
//push command arguments to the array to work with
for (let i = 3; i < process.argv.length; i++) {
    argumentArr.push(process.argv[i]);
}

//turn the array into a string
let argument = argumentArr.toString();
//take out the commans from the string and replace them with a space
argument = argument.split(",").join(" ");
console.log(argument);

const liri = function () {
    fs.appendFile("log.txt", command + "," + argument + "\n", function (err) {
        // If an error was experienced we say it.
        if (err) {
            console.log(err);
        }
    })

    if (command === "my-tweets") {
        client.get('statuses/user_timeline', { user_id: "xeroneon12", count: 20 }, function (error, tweets, response) {
            if (!error) {
                for (let i = 0; i < tweets.length; i++) {
                    console.log(tweets[i].text);
                    console.log("================================");
                }
            }
        });
    } else if (command === "spotify-this-song") {
        spotify.search({ type: 'track', query: argument }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }

            //   console.log(data.tracks.items[0]);
            console.log("Song Name: ", data.tracks.items[0].name);
            console.log("Album Name: ", data.tracks.items[0].album.name);
            console.log("Artists: ", data.tracks.items[0].artists[0].name);
            console.log("Link: ", data.tracks.items[0].preview_url);

        });
    } else if (command === "movie-this") {
        request('http://www.omdbapi.com/?apikey=trilogy&t=' + argument, function (error, response, body) {
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
    }
}

liri();


if (command === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function (error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }

        // We will then print the contents of data
        // console.log(data);

        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");

        // We will then re-display the content as an array for later use.
        command = dataArr[0];
        argument = dataArr[1];

        liri();

    });
}