$(document).ready(function(){
  initMainSlider();
});

function initMainSlider(){
  $('.j-slider').cycle({
    slides: '.j-sliderItem',
    fx: 'scrollHorz',
    prev: '.-type_prev.j-sliderControl',
    next: '.-type_next.j-sliderControl',
    pager: '.j-sliderPager'
  });
}