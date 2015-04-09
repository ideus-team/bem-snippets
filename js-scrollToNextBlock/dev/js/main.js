$(document).ready(function () {
  scrollToNextBlock();
});

function scrollToNextBlock() {
  // Check Is Block Visible
  $(window).scroll(function(){
    $('.js-section').removeClass('-state_visible');
    $('.js-section:in-viewport()').addClass('-state_visible');

    var num = $('.js-section.-state_visible').eq(0).index('.js-section');

    if (
      $('.js-section').eq(num + 1).length &&
      $(window).scrollTop() != $(document).height() - $(window).height() //page scrolled to bottom, if the screen is larger then the last block
    ) {
        var href = $('.js-section').eq(num + 1).attr('id');
        $('.js-scrollToNextBlock').attr('href', '#' + href);

        if( $('.js-scrollToNextBlock').not(':visible')) {
          $('.js-scrollToNextBlock').fadeIn();
        }
    } else {
      $('.js-scrollToNextBlock').fadeOut();
    }

  });

  // Scroll To Next Block
  $('.js-scrollToNextBlock').click(function(e) {
    var href = this.hash;
    var distance = $(window).scrollTop() - $(href).offset().top;
    var speed = distance > 0 ? distance / 3 : -1 * distance / 3;

    $('html, body').animate({scrollTop: $(href).offset().top}, speed);

    e.preventDefault();
  });
}
