function initFormStyler() {
  $('select, input[type="checkbox"], input[type="radio"]').styler();
}

function validateForms() {
  $('.js-validation').each(function(){
    $(this).validate({
      errorClass: 'b-form__hint',
      errorElement: 'div',
      highlight: function(element, errorClass, validClass) {
        $(element).parent().removeClass('-state_valid').addClass('-state_error');
      },
      unhighlight: function(element, errorClass, validClass) {
        $(element).parent().removeClass('-state_error').addClass('-state_valid');
      }
    });
  });
}