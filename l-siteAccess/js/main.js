$(document).ready(function(){
  $('.b-siteAccess__btn').click(function(){
    $(this).toggleClass('-active_state').parent().find('.b-siteAccess__inner').toggle();
    return false;
  });
  $('*').click(function(e) {
     if (!$(e.target).parents().is('.l-siteAccess'))
     {
        $('.b-siteAccess__inner').hide();
        $(".b-siteAccess__btn").removeClass("-active_state");
     };
   });
});