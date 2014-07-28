$(document).ready(function(){
  $('.b-siteAccess__btn').click(function(){
    $(this).toggleClass('-active_state').parent().find('.b-siteAccess__inner').toggle();
    return false;
  });
  var s = skrollr.init();
});