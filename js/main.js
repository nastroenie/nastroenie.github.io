// OPEN   Работа с анимациями при прокрутки страницы. Wow.js
var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       100,          // distance to the element when triggering the animation (default is 0)
      mobile:       false,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: false,     // reset animation on end (default is true)
    }
  );
  wow.init();
  // CLOSE  Работа с анимациями при прокрутки страницы. Wow.js


// OPEN Адаптивное меню
  $(function(){
    var link  = $('.nav__item');
    var menu  = $('.nav');
    var close = $('.close-menu');
    link.on('click', function(event){
        event.preventDefault();
        menu.toggleClass('nav');
    });
    close.on('click', function(event) {
        event.preventDefault();
        menu.toggleClass('nav');
    });
});
// CLOSE Адаптивное меню


// OPEN   Якорь. Плавный переход по клику на ссылку.
$(document).ready(function(){
  $(".nav").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});
// CLOSE  Якорь. Плавный переход по клику на ссылку.
