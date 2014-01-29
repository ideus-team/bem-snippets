$(document).ready(function () {
  initLanguage();
});

function initLanguage() {
  $('.j-langFlag__list').hide();
  $('.j-langFlag__selected').on('click', function (e) {
    e.preventDefault();
    var elem = $(this).next('.j-langFlag__list');
    $('.j-langFlag__list').not(elem).hide();
    elem.toggle();
  });
}