// + click
// + this
// + hover
// + keydown
// + animate
// -----------------------------

// when your page is loaded...
$(document).ready(function(){

  //alert("it's working!");

  // click to do something to an object
  // $('.click-me').click(function(){
  //   //console.log('click');
  //   //$('.square').animate({left:"+=100px"}, "fast");
  //   $('.square').addClass('big-square');
  // });

  // click to do something to itself
  // $('.click-me').click(function(){
  //   $(this).slideUp();
  // });

  // variables!
  var action = '.click-me';
  var target = '.square';

  $(action).click(function(){
    $(target).hide();
  });

  // hover
  // $('.square').hover(function(){
  //   $(this).css("background-color", "blue");
  // });

  // $('.click-me').hover(function(){
  //    $(this).slideUp();
  // });

  // now stop hovering
  $('.square').hover(

    function(){
      $(this).css("background-color", "blue");
    },

    function(){
      $(this).css("background-color", "red");
    }

  );

  // use your keyboard
  $(document).keydown(function(key) {
    switch(parseInt(key.which,10)) {
      // Left arrow key pressed
      case 37:
          $('.square').animate({right: "+=10px"}, 'fast');
          break;
      // Up Arrow Pressed
      case 38:
          $('.square').animate({bottom: "+=10px"}, 'fast');
          break;
      // Right Arrow Pressed
      case 39:
          $('.square').animate({right: "+=10px"}, 'fast');
          break;
      // Down Arrow Pressed
      case 40:
          $('.square').animate({bottom: "-=10px"}, 'fast');
          break;
  }
});




























});
