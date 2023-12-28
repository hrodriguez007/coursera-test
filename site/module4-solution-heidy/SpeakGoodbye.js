(function (window) {
var byeSpeaker = {};
var speakWord = "Good Bye";

byeSpeaker.speak = function (names) {
  console.log(speakWord + " " + names);
}
  // byeSpeaker.names is unnecessary because 
  //multiple names being checked here unlike Lecture 52 example
  //where it is only one also is not defined as one name between
  // var byeSpeaker and var speakWord

window.byeSpeaker = byeSpeaker;
})(window);
