$(document).ready(function(){
  initMainSlider();
});

function initMainSlider(){
  $('.-type_sometype .js-slider').cycle({
    slides: '.js-sliderItem',
    prev  : '.-type_prev.js-sliderControl',
    next  : '.-type_next.js-sliderControl',
    pager : '.js-sliderPager',
    fx: 'scrollHorz',
    pagerTemplate: '<span class="b-slider__page">&bull;</span>',
    swipe: true,
    autoHeight: 'calc',
    speed: 300,
    timeout: 8000,
    loader: 'wait'
  });
}
