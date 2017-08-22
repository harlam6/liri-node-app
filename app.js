var geocoder = require("geocoder");
var inquirer = require("inquirer");
var spotify = require("spotify-api");
var Twitter = require('twitter');
var request = require("request");
var keys = require("./keys.js")

var client = new Twitter ({
  consumer_key: 'keys.twitterKeys.consumer_key',
  consumer_secret: 'keys.twitterKeys.consumer_secret',
  access_token_key: 'keys.twitterKeys.access_token_key',
  access_token_secret: 'keys.twitterKeys.access_token_secret',
})

var params = {
  q: 'narsuk', 
  count: 20
}

client.get('search/tweets', params, gotData);
function gotData (err, data, response) {
  // var tweets = data.statuses;
  // for (var i = 0; i < tweets.length; i++) {
    console.log(data);
  }

