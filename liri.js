require("dotenv").config();

//requires the NPM modules for accessing the spotify API
var Spotify = require('node-spotify-api');
//requires the information contained in the keys.js file to access spotify API
var SpotifyKeys = require('./keys.js');

//sets spotify equal to the key info to call the spotify API
var spotify = new Spotify(SpotifyKeys.spotify);

//searches the spotify API by track name 
spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    //console.logs the response from the Spotify API
    console.log(response);
  })
  .catch(function(err) {
    //console.logs any caught errors
    console.log(err);
  });