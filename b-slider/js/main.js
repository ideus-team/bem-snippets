$(document).ready(function(){
  initMainSlider();
});

function initMainSlider(){
  $('.js-slider').cycle({
    slides: '.js-sliderItem',
    fx: 'scrollHorz',
    prev : '.-type_prev.js-sliderControl',
    next : '.-type_next.js-sliderControl',
    pager: '.js-sliderPager',
    pagerTemplate: '<span class="b-slider__page">&bull;</span>',
    swipe: true,
    autoHeight: 'calc',
    speed: 300,
    timeout: 8000,
    loader: 'wait'
  });
  /* Change slider bg on slide change
  $('.js-slider').on('cycle-before', function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {
    $('.js-sliderBg').css('background-image','url('+incomingSlideEl.dataset.bg+')');
  });
  */
}
