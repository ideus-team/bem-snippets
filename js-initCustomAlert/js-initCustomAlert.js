function initCustomAlert() {
  window.alert = function (message) {
    var activeEl = document.activeElement; // сохраняем текущих активный элемент
    $.fancybox.open(
      [{
        content : message, // html что выводится в попап
        closeClick : true, // закрывать попап просто кликнув по нему мышью   
        beforeLoad: function(){
          activeEl.blur(); // сбрасываем у него фокус, чтоб например нельзя было написать текст в input, когда выведен попап.
        },           
        afterClose: function(){
          activeEl.focus(); // возвращаем фокус на активный элемент
        }    
      }]
    );
  };
}

$(document).ready(function() {
  initCustomAlert();
});

// Пример использования
// alert('Alert text');
