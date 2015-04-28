$(document).ready(function(){
  initMainSlider();
});

function initMainSlider(){
  $('.js-slider.-type_testimonials').cycle({
    slides: '.-type_testimonials .js-sliderItem',
    prev : '.-type_testimonials .-type_prev.js-sliderControl',
    next : '.-type_testimonials .-type_next.js-sliderControl',
    pager: '.-type_testimonials .js-sliderPager',
    fx: 'scrollHorz',
    pagerTemplate: '<span class="b-slider__page">&bull;</span>',
    swipe: true,
    autoHeight: 'calc',
    speed: 300,
    timeout: 8000,
    loader: 'wait'
  });
  /* Change slider bg on slide change
  $('.js-slider').on('cycle-before', function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {
    $('.js-sliderBg').animate({'background-position-x': '300%'}, 500, function() {
        $('.js-sliderBg').css('background-image','url('+$(incomingSlideEl).data('bg') + ')');
        $('.js-sliderOverlay').css('background-color','#fff');
        $('.js-sliderBg').css('background-position-x','50%');
        $('.js-sliderOverlay').animate({
          backgroundColor: 'transparent'
        }, 1000);
    });
  });
  */
}
