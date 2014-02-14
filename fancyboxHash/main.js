/**
 *  Authors: %Author Name%
*/

$(document).ready(function () {
  fancyboxProduct();
});

$(window).resize(function() {

});
$(window).load(function () {

});
function fancyboxProduct(){
  $('.fancybox').fancybox({
    wrapCSS: 'b-loginfancyBox',
    helpers : {
      history: true,
      overlay : {
        css : {
          'background-color': 'rgba(0,0,0,0.5)'
        }
      }
    }
  });
  $('.fancybox-2').fancybox({
    wrapCSS: 'b-loginfancyBox',
    arrows : false,
    helpers : {
      history: true,
      overlay : {
        css : {
          'background-color': 'rgba(0,0,0,0.5)'
        }
      }
    }
  });
  
}
