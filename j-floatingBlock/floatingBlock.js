/*
** floatingBlock.js: This js-code allows us make floating(sticky) block
** Example of using this code we can see here http://renfloor.com/travertine.html
*/
function floatingSidebar(){
  var heightFloatSidebar = $('.b-siteSidebar__floating').height();
  var heightContentText = $('.b-contentText').height();
  if($('.b-siteSidebar__floating').length>0 && (heightFloatSidebar<heightContentText)){
    $('.b-siteSidebar').addClass('-fixed_style');  
    var topPosFloating =  $('.b-siteSidebar__floating').offset().top;
    $(window).scroll(function() { 
      var top = $(document).scrollTop();
      var pip = $('.l-siteFooter').offset().top;
      var height = $('.b-siteSidebar__floating').outerHeight();
      if (top > topPosFloating && top < pip - height - 80){
        $('.b-siteSidebar__floating').addClass('-fixed_style').removeAttr("style");
      }else if(top > pip - height-80){
        $('.b-siteSidebar__floating').removeClass('-fixed_style').css({'position':'absolute','bottom':'0'});
      }else{
        $('.b-siteSidebar__floating').removeClass('-fixed_style');
      }
    });
  }
}