(function () {
  var helloSpeaker = {};
  var speakWord = "Hello";

  helloSpeaker.speak = function (names) {
    console.log(speakWord + " " + names);
    // helloSpeaker.names is unnecessary because 
  //multiple names being checked here unlike Lecture 52 example
  //where it is only one, also is not defined as one name between
  // var helloSpeaker and var speakWord
  }
  
  window.helloSpeaker = helloSpeaker;
})(window);