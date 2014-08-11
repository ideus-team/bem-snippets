$(document).ready(function(){
  intSelectTime();
});

function intSelectTime() {
  $('.js-selectTime').timepicker({ 'timeFormat': 'h:i' }).on("change", function() {   
    $(this).next('input').focus();
  });
  $('.js-selectTimes').click(function(){
  console.log('text');
    $('.js-selectTime.-type_1').focus();
  });
}