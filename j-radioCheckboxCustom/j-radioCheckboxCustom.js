$(document).ready(function() {
    intInput();
});

function intInput(){
  $('input[type="radio"], input[type="checkbox"]').addClass('b-inputOpacity');
  $('input[type="checkbox"]').after('<div class="b-checkboxContainer"></div>');
  $('input[type="radio"]').after('<div class="b-radioContainer"></div>');
  
  $('input[type="radio"], input[type="checkbox"]').change(function(){
     var inpName = $(this).attr('name');
     $('input[name="'+inpName+'"]').parents('.b-radio, .b-checkbox').removeClass('b-checked');
     $('input[name="'+inpName+'"]:checked').parents('.b-radio, .b-checkbox').addClass('b-checked');     
  }).change();
}