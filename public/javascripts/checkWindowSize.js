// When the document is loaded and ready
$(document).ready(function() {
  console.log("Vent Origins");
  checkScreenSize();
});

// Used for when the screen is resized
$(window).resize(checkScreenSize);

function checkScreenSize() {
  console.log("Checking screen size")
  var screenWidth = $(window).width();
  var screenHeight = $(window).height();
  console.log("Width:" + screenWidth);
  console.log("Height:" + screenHeight);

  $('.top-header').width(screenWidth - $('.dash-board').width());
  $('.left-shifted-to-dashboard').width(screenWidth - $('.dash-board').width());
}