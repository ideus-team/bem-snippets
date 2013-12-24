/**
 *  Authors: Oksana Blonskaya
*/

$(document).ready(function () {
  navigation();
  
  if ($('html').hasClass('-device_desktop')) { // or -device_tablet, -device_mobile
    //... write some code
  }
});

$(window).resize(function() {

});

$(window).load(function () {

});

function navigation(){
  var links = $('.b-mainNavigation__link');
  slide = $('.j-entry');
  slide.waypoint(function(direction){
    if (direction === "down"){
      var $link = $('.b-mainNavigation__link[href="#' + this.id + '"]');
      links.parent('li').removeClass('-state_current');
      $link.parent('li').toggleClass('-state_current');
      }
    },{
      offset: 100
    }).waypoint(function(direction){
      if (direction === "up"){
      var $link = $('.b-mainNavigation__link[href="#' + this.id + '"]');
      links.parent('li').removeClass('-state_current');
      $link.parent('li').toggleClass('-state_current');
      }
    },{
      offset: function(){
      return -$(this).height()+40; // 40 - it is height of sticky menu block
      }
    });
    htmlbody = $("html, body");  
     function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.j-entry[data-slide="' + dataslide + '"]').offset().top - 40 // 40 - it is height of sticky menu block
        }, 2000, 'easeInOutQuint');
    }

    //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });
}