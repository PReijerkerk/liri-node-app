require("dotenv").config();

//requires the NPM modules for accessing the spotify API
var Spotify = require('node-spotify-api');
//requires the information contained in the keys.js file to access spotify API
var SpotifyKeys = require('./keys.js');

//requests action
var action = process.argv[2];
//Argument to request specific information
//Based on above action type
var argument = "";

//Controller function that determines the action taken and the specific data needed for the action
handleAction(action, argument);

//switch function to determine which action to take
function handleAction(action, argument) {
  argument = getArgument();

  switch (action) {
    //concert this
    case "concert-this":
    break;
    //Gathers song information from spotify API
    case "spotify-this-song":
    //Grabs the songTitle argument
    var songTitle = argument;
    //if no songTitle is provided then defaults to "All the small things"
    if (songTitle === "") {
      lookupSong();
    } else {
      //gets the song info for the specified song
      getSongInfo()(songTitle);
    }
    break;
    //movie this
    case "movie-this":
    break;
    //do what it says
    case "do-what-it-says":
    break;
  }
}

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