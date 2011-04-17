/* Author: Miles Z. Sterrett */

$(function() {
  $('.screenshot').hover(function() {
    $(this).find('.screenshot-info').css('height', '400px');
    $(this).find('.screenshot-top').animate({height: '80px'}, 500);
  }, function() {
    $(this).find('.screenshot-top').animate({height: '400px'}, 500, function() {
      $(this).find('.screenshot-info').css('height', '80px');
    });
  });
});
