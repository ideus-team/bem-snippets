function outDate() {
  
  var arrayDate = ['20.04.2014', '16.04.2014', '17.04.2014', '12.04.2014', '11.04.2014'];    
  
  $(document).on('click', '.j-calendar', function(){ 
    function disable(date, include) {
      var include = include || false;
      var date = $.datepicker.formatDate("dd.mm.yy", date);
      var length = arrayDate.length;
      var outDate;
      for (var i=0; i<length; i++) {
        if(include) {
          outDate = ( $.inArray(date, arrayDate)!=-1 )  ? true : false;
        }
        else {
          outDate = ( $.inArray(date, arrayDate)!=-1 )  ? false : true;
        }
        return [outDate];
      }
    }
    $(this).datepicker({
      showOn: 'focus',
      dateFormat: 'dd.mm.yy',
      beforeShowDay: function (date) {
        // false - исключаем даты в календаре из массива
        // true  - оставляем только даты из массива в календаре  
        return disable(date, false);
      }
    }).focus();
  });
}