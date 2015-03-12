$(document).ready(function(){
  initMainSlider();
});

function initMainSlider(){
  $('.js-slider').cycle({
    slides: '.js-sliderItem',
    fx: 'scrollHorz',
    prev: '.-type_prev.js-sliderControl',
    next: '.-type_next.js-sliderControl',
    pager: '.js-sliderPager',
    pagerTemplate: '<span class="b-slider__page">&bull;</span>'
  });
}