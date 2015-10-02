// + jQuery syntax
// 	+ $ and document ready
// 	+ vs. javascript
// 	+ joining with .
// 	+ getting and setting
// 	+ jquery reference
// + targeting objects
//  + by HTML element type
//  + by class
//  + by ID
// + finding objects
// 	+ finding <a> in <p> and do something to it
// + creating objects
// 	+ insert
// 	+ create
// -----------------------------

// when your page is loaded...
// don't forget to use the jQuery declaration $
$(document).ready(function(){

  // do stuff!

  // jquery shares with and understands javascript. Examples:
  // variables
  var hello = "does it work still?";
  // console
  console.log(hello);

  // you can string commands together with this format
  //$(object).this().that().somethingElse();

  // you can either SET or GET using jQuery. Examples:
  // get the height of the window by leaving () empty
  var height = $(window).height();
  console.log(height);

  // set the class of something by putting the value inside the ()
  $('p').addClass('text');

  // how do I know what I can do with jQuery?
  //$('body').html('<h1><a href="http://www.jquery.com" target="_blank">jQuery reference</a></h1>');

  // targeting objects
  // by HTML element type
  $('img').css("height", 100);

  // by class
  $('.red-text').css("color", "red");

  // by ID
  $('#hide-me').fadeOut(1000);

  // you can also find things
  // find any links inside of paragraphs and make them red
  $('p').find('a').css("color", "red");

  // you can also create things
  // append some text to existing text
  $('.unicorn').append("unicorn");

  // insert new text
  $('.unicorn').html("I'm now an even better unicorn");

  // create whole objects
  $('.unicorn').html("<h1>I'm a <a href=''>unicorn</a> too</h1>");

});
