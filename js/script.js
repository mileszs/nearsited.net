/* Author: Miles Z. Sterrett */
//= require <jquery-1.5.1.min>
//= require <jquery.scrollTo-1.4.2-min>
//= require <jquery.hoverIntent.min>

$(function() {
  // projects animated info
  var topBaseHeight = $('.screenshot-top').css('height');
  var infoBaseHeight = $('.screenshot-info').css('height');
  $('.screenshot').hoverIntent(function() {
    $(this).find('.screenshot-info').css('height', '240px');
    $(this).find('.screenshot-top').animate({height: '60px'}, 500);
  }, function() {
    $(this).find('.screenshot-top').animate({height: topBaseHeight}, 500, function() {
      $(this).find('.screenshot-info').css('height', infoBaseHeight);
    });
  });

  // scroll to links
  $('a.scroll-to-links').click(function(ev) {
    ev.preventDefault();
    $.scrollTo($(this).attr('href'), 1000);
  });

  // // at the very top, make header bg transparent
  // $(document).scroll(function(ev) {
  //   $('header').css('background-color', '#fff');
  //   if ($('header').position().top <= 4) {
  //     $('header').css('background-color', 'transparent');
  //   }
  // });

  // Animate email me link on load
  // $('a.button').animate({ fontSize: '72' }, 2000);

  // animate email link on hover
  $('a.button').hover(function(ev) {
    $('a.button').fadeTo('slow', 1);
    $('a.button span.bracket').fadeTo('slow', 0.2);
  }, function(ev) {
    $('a.button').fadeTo('slow', 0.8);
    $('a span.bracket').fadeTo('fast', 1);
  });

  window.onscroll = function() {
    var yPos = ($(window).scrollTop() / 3) + 580;
    var coords = '50% ' + yPos + 'px';
    console.log(coords);
    console.log(yPos);
    $('section#hello').css({ backgroundPosition: coords });
  };
});
