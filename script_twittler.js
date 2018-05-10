/* 
-- Bare Minimum Requirements --

    ✓ - Show the user new tweets somehow. (You can show them automatically as they're created, or create a button that displays new tweets.)
    
    ✓ - Display the timestamps of when the tweets were created. This timestamp should reflect the actual time the tweets were created, and should not just be hardcoded.
    
    ✓ - Design your interface so that you want to look at and use the product you're making.
    
    ✓ - Allow the user to click on a username to see that user's timeline.

-- Advanced --

    *** Show when the tweets were created in a human-friendly way (eg "10 minutes ago"). You'll want to find and use a library for this.
    
    ✓ -  Allow the user to tweet. (This is going to require you to understand a little more about data_generator.js, but you shouldn't need to modify anything.) 
*/

$(document).ready(function(){
    
// SHOW THE USER NEW TWEETS --> generate random tweets when button is click
    
  $('#btn').click(function(){

      var $newTweets = $('#new_tweets');

      var index = streams.home.length - 1;
      while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = $('<li id="tweet_feed"></li>');
          var $tweetUser = $('<button id="user_btn">@' + tweet.user + '</button>');
          var $tweetMessage = $('<p id="tweet_message">' + tweet.message + '</p>');
          var $tweetTimeStamp = $('<p id="tweet_timing">tweeted ' + moment().startOf().fromNow() + '</p>');

          $tweetUser.appendTo($tweet);
          $tweetMessage.appendTo($tweet);
          $tweetTimeStamp.appendTo($tweet);
          $tweet.appendTo($newTweets);
          index -= 1;
          
      }
      
// ALLOW THE USER TO CLICK ON USERNAME AND SEE TIMELINE --> filter tweets according to the username when username button is click
      
//        $('#user_btn').click(function(){
//            alert('hello word');
//        });
      
  });

    
// ALLOW THE USER TO TWEET --> select the form and print on screen when submit button is click
    
// prevent browser from reloading
// variable that store the value written on the input form
// print datas in the #user_tweets into the html 
    
   $('form').submit(function(event){
       event.preventDefault();
       var textInput = $('#input_text').val();   
       
       if (textInput !== '') {
           $("#user_tweets").html('<button id="user_btn">@you</button>' + '<p id="tweet_message">' + textInput + '</p>' + '<p id="tweet_timing">tweeted ' + moment().startOf().fromNow() + '</p>');
       }
   });

$(document).on('click', '.shawndrost', function() { /*Invoke function on click of name*/
  $body.html(''); /*Clear body of other users not related to the one clicked*/
  clearInterval(interval); /*Cease new Tweets*/
  var index = streams.users.shawndrost.length - 1; /*Collect generated Tweets from specific user*/
  while (index >= 0) {
    var tweet = streams.users.shawndrost[index]; /*Tweet information from shawndrost in data_generator.js*/
    var $tweet = $('<div class="tweet_content"><div class="'+tweet.user+'"></div><span class="tweet_time"></span><div class="tweet_msg"></div></div>'); /*Generate new div for specific username*/
    $tweet.find('.'+tweet.user).text('@shawndrost'); /*Generate username*/
    $tweet.find('.tweet_time').text(tweet.created_at); /*Generate time of Tweet created*/
    $tweet.find('.tweet_msg').text(tweet.message); /*Generate Tweet message of user*/
    $tweet.prependTo($body).slideDown(400); /*Generate dropdown for specific user*/
    index -= 1;
  }
});

$(document).on('click', '.sharksforcheap', function() {
  $body.html('');
  clearInterval(interval);
  var index = streams.users.sharksforcheap.length - 1;
  while (index >= 0) {
    var tweet = streams.users.sharksforcheap[index];
    var $tweet = $('<div class="tweet_content"><div class="'+tweet.user+'"></div><span class="tweet_time"></span><div class="tweet_msg"></div></div>');
    $tweet.find('.'+tweet.user).text('@sharksforcheap');
    $tweet.find('.tweet_time').text(tweet.created_at);
    $tweet.find('.tweet_msg').text(tweet.message);
    $tweet.prependTo($body).slideDown(400);
    index -= 1;
  }
});

$(document).on('click', '.mracus', function() {
  $body.html('');
  clearInterval(interval);
  var index = streams.users.mracus.length - 1;
  while (index >= 0) {
    var tweet = streams.users.mracus[index];
    var $tweet = $('<div class="tweet_content"><div class="'+tweet.user+'"></div><span class="tweet_time"></span><div class="tweet_msg"></div></div>');
    $tweet.find('.'+tweet.user).text('@mracus');
    $tweet.find('.tweet_time').text(tweet.created_at);
    $tweet.find('.tweet_msg').text(tweet.message);
    $tweet.prependTo($body).slideDown(400);
    index -= 1;
  }
});

$(document).on('click', '.douglascalhoun', function() {
  $body.html('');
  clearInterval(interval);
  var index = streams.users.douglascalhoun.length - 1;
  while (index >= 0) {
    var tweet = streams.users.douglascalhoun[index];
    var $tweet = $('<div class="tweet_content"><div class="'+tweet.user+'"></div><span class="tweet_time"></span><div class="tweet_msg"></div></div>');
    $tweet.find('.'+tweet.user).text('douglascalhoun');
    $tweet.find('.tweet_time').text(tweet.created_at);
    $tweet.find('.tweet_msg').text(tweet.message);
    $tweet.prependTo($body).slideDown(400);
    index -= 1;
    }
  });

    
});


///////////////////////////////////////////////////////////

// TIMESTAMPS FUNCTION --> Return a string with the format "minute/day/year hour:minute AM/PM"
//function timeStamp() {
//// Create a date object with the current time
//  var now = new Date();
//
//// Create an array with the current month, day and time
//  var date = [now.getMonth() + 1, now.getDate(), now.getFullYear()];
//
//// Create an array with the current hour and minute
//  var time = [now.getHours(), now.getMinutes()];
//
//// Determine AM or PM suffix based on the hour
//  var suffix = (time[0] < 12) ? "am" : "pm";
//
//// Convert hour from military time
//  time[0] = (time[0] < 12) ? time[0] : time[0] - 12;
//
//// If hour is 0, set it to 12
//  time[0] = time[0] || 12;
//
//// Return the formatted string
//  return date.join("/") + ' at ' + time.join(':') + suffix;
//}

// OTHER TIMESTAMPS FUNCTION USING JQUERY --> Return a string with a format like this: "Fri Dec 29 2017 15:42:20 GMT-0800 (PST)"
// var now = new Date($.now());