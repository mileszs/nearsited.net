/* Author: Miles Z. Sterrett */

$(function() {
  // TODO: This needs to pull existing style info to reset, instead of
  // forcing me to change style info in two fucking places.
  $('.screenshot').hover(function() {
    $(this).find('.screenshot-info').css('height', '240px');
    $(this).find('.screenshot-top').animate({height: '60px'}, 500);
  }, function() {
    $(this).find('.screenshot-top').animate({height: '240px'}, 500, function() {
      $(this).find('.screenshot-info').css('height', '60px');
    });
  });

  // TODO: clearly the following bullshit can be abstracted
  $('a.projects-link').click(function(ev) {
    ev.preventDefault();
    $.scrollTo('#projects', 1000);
  });

  $('a.contact-link').click(function(ev) {
    ev.preventDefault();
    $.scrollTo('#contact', 1000);
  });

  $('a.hello-link').click(function(ev) {
    ev.preventDefault();
    $.scrollTo('#hello', 1000);
  });
});
