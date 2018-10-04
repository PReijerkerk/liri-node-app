# liri-node-app

LIRI is a Language Interpretation and Recognition Interface. You can use LIRI to find an artists next concert, provide you info about a song or movie, or allow you to choose a random action from your text file.

#Installs

Please see the package.json for a list of all dependent node packages, below are the main ones used.

#Axios

npm i axios

#Spotify

npm i node-spotify-api

#Moment

npm i moment

#dotenv

npm i dotenv

#Simple Node Logger

npm i simple-node-logger

#Get Started

Below is a list of the commands you can use with LIRI

#Get Concert
node liri.js concert-this '< artist name here >'
#Get Song Info
node liri.js spotify-this-song '< song name here >'
#Get Movie Info
node liri.js movie-this '< movie name here >'
#Get Random Info
node liri.js do-what-it-says