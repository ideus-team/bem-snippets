function initCustomAlert() {
  window.alert = function (message) {
    // Сбрасываем focus у текущего элемента, чтоб например нельзя было написать текст в input, когда выведен попап.
    $(document.activeElement).blur();
    $.fancybox.open(
      [{
        content : message, // html что выводится в попап
        closeClick : true // закрывать попап просто кликнув по нему мышью
      }]
    );
  };
}

$(document).ready(function() {
  initCustomAlert();
});

// Пример использования
// alert('Alert text');
