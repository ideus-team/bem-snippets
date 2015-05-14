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
  // Change slider bg on slide change
  $('.-type_sometype .js-slider').on('cycle-before', function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {
    $('.js-sliderBg.-type_sometype').animate({'background-position-x': '300%'}, 500, function() {
        $('.-type_sometype.js-sliderBg').css('background-image','url('+$(incomingSlideEl).data('bg') + ')');
        $('.-type_sometype .js-sliderOverlay').css('background-color','#fff');
        $('.-type_sometype.js-sliderBg').css('background-position-x','50%');
        $('.-type_sometype .js-sliderOverlay').animate({
          backgroundColor: 'transparent'
        }, 1000);
    });
  });
}
