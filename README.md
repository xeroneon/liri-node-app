# liri-node-app

This apllication can take in 4 commands("my-tweets", "spotify-this-song", "movie-this", and "do-what-it-says). it completes these tasks using node packages and API's

## Getting Started

To get started using you must install npm and make a .env file first as explained in the installing portion of this file. Then to use the app, open node and an example command
is "node liri.js movie-this The Matrix"

### Prerequisites

Node

### Installing

First you will want to download node and npm. Then download the required packages using the command in node "npm install". After that is complete you will need to create a .env file containing your keys for spotify and twitter. An example of the code that needs to be in the .env file follows

```js
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

# Twitter API keys

TWITTER_CONSUMER_KEY=your-twitter-consumer-key
TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret

```

## Built With

* [Node](https://nodejs.org/en/docs/) - Run javascript without a browser!
* [twitter npm package](https://www.npmjs.com/package/twitter) - Use the twitter api with node
* [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) - Use the spotify api with node
* [OMDB API](http://omdbapi.com/) - Get movie info

## Authors

* **Andrew Jirasek** - *Initial work* - [xeroneon](https://github.com/xeroneon)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

