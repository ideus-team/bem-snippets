$(document).ready(function(){
  initMainSlider();
});

function initMainSlider(){
  $('.-type_testimonials .js-slider').cycle({
    slides: '> .js-sliderItem',
    prev  : '.-type_testimonials .-type_prev.js-sliderControl',
    next  : '.-type_testimonials .-type_next.js-sliderControl',
    pager : '.-type_testimonials .js-sliderPager',
    fx: 'scrollHorz',
    pagerTemplate: '<span class="b-slider__page">&bull;</span>',
    swipe: true,
    autoHeight: 'calc',
    speed: 300,
    timeout: 6000,
    loader: 'wait'
  });

  $('.-type_testimonials .js-bgSlider').cycle({
    slides: '> .js-sliderItem',
    fx: 'scrollHorz',
    paused: true,
    log: false
  });
  $('.-type_testimonials .js-slider').on('cycle-pager-activated', function(event, optionHash) {

  });
  $('.-type_testimonials .js-slider').on('cycle-before', function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {
    $('.-type_testimonials .js-bgSlider').cycle('goto', $(incomingSlideEl).index() - 1);
  });
}
