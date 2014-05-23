$(document).ready(function () {
  validateForm($('.j-form'));
});

function validateForm(elemvalid){

jQuery.validator.addMethod("accept", function(value, element, param) {
  return value.match(new RegExp("." + param + "$"));
});

jQuery.validator.addMethod("lettersonly_3", function(value, element) {
    //return this.optional(element) || /^[a-z\-.,()'"\s]+$/i.test(value);
    return this.optional(element) || /^[a-z\ .()'"\s]+$/i.test(value);
}, "Letters, spaces and dots are allowed");

  $('.no_required').change(function(){
    if ($(this).val() === ''){
      $(this).parent().removeClass('valid').removeClass('error');
    }
  });
  
jQuery.validator.addMethod("anyDate",
    function(value, element) {
       // return value.match(/^(0?[1-9]|[12][0-9]|3[0-2])[.,/ -](0?[1-9]|1[0-2])[.,/ -](19|20)?\d{2}$/);
        return value.match(/^(0?[1-9]|[12][0-9]|3[0-2])[.-](0?[1-9]|1[0-2])[.,/ -](19|20)?\d{2}$/);
    },
    "Please enter a date in the format!"
);
// Older "accept" file extension method. Old docs: http://docs.jquery.com/Plugins/Validation/Methods/accept
jQuery.validator.addMethod("extension_2", function(value, element, param) {
	param = typeof param === "string" ? param.replace(/,/g, '|') : "txt|doc|pdf";
	return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"));
}, jQuery.format("Please enter a value with a valid extension."));
    
elemvalid.validate({
 ignore: [], /* for Foundation since it hides the original fields, and Jquery Validate needs a hint to validate hidden fields https://github.com/zurb/foundation/issues/2295 */
  onfocusout: function(element) { this.element(element);},
  invalidHandler: function(){   
    setTimeout(function(){  
      $('select').trigger('refresh');  
    }, 1000000);  
  },
  errorClass: 'help-block',
  validClass: 'valid',
  errorElement: 'div',
  highlight: function(element, errorClass, validClass) {
    $(element).parent().addClass('error').removeClass('valid');

    if ($(element).hasClass('no_required') && $(element).val() === '')
    $(element).parent().removeClass('valid').removeClass('error');
  },
  unhighlight: function(element, errorClass, validClass) {
    $(element).parent().removeClass('error').addClass('valid');

    if ($(element).hasClass('no_required') && $(element).val() === '')
    $(element).parent().removeClass('valid').removeClass('error');
  }
});

$('select').change(function(){
     $(".js-contactForm").valid();
 });
}
