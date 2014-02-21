function onBookingSubmit() {
  $(document).on("click", ".j-bookingSubmit", function(e){
    e.preventDefault();
    bookingSubmit();
  });
}

function bookingSubmit() {
  // Получаем данные из формы
  var directions  = getDirections($('#id_departCity_c').val(),$('#id_returnCity_c').val());
  // эта переменная используется для определения какой перевозчик будет осуществлять рейс: АФЛ или Аврора
  var currentRace = [directions.from,directions.to];
  // отдельные переменные городов вводятся для унификации кода с букингом АФЛ
  var departCity  = directions.from;
  var returnCity  = directions.to;

  // выставляем даты по умолчанию
  var fromData    = $('.j-calendar.j-from').val() || moment().format("DD-MM-YYYY");             // выбранная дата вылета - сегодня
  var dep         = moment(fromData, "DD-MM-YYYY");
  var ret         = moment(fromData, "DD-MM-YYYY").add('days', 1);
  var toData      = $('.j-calendar.j-to').val()   || ret.format("DD-MM-YYYY");   // выбранная дата возвращения - завтра или дата вылета +1   
      ret         = moment(toData, "DD-MM-YYYY");  
  var depDayD     = dep.format("D");
  var depDayDD    = dep.format("DD");
  var depMonthM   = dep.format("M");
  var depMonthMM  = dep.format("MM");
  var depMonthMMM = dep.format("MMM").toUpperCase();
  var depYearYYYY = dep.format("YYYY");
  var retDayD     = ret.format("D");
  var retDayDD    = ret.format("DD");
  var retMonthM   = ret.format("M");
  var retMonthMM  = ret.format("MM");
  var retMonthMMM = ret.format("MMM").toUpperCase();
  var retYearYYYY = ret.format("YYYY");

  var classServiceVal = $('#bookServiceClass option:selected').val() || 'CoachClass';   // класс обслуживания
  var classService;
  var amountBig       = $('#bookServiceClass1 option:selected').val() || 1;  // кол-во взрослых
  var amountChild     = $('#bookServiceClass2 option:selected').val() || 0;  // кол-во детей
  var amountBaby      = $('#bookServiceClass3 option:selected').val() || 0;  // кол-во младенцев
  var direction = 0;  // направление полёта
  var currencyCSV = 'RUB';

  // Если города не заполнены - не пускаем на букинг
  if (departCity === "" || returnCity === "") {
    return false;
  }

  // Формирование букинг-URL
  var bookingURL;
  var bookingStep = 1; // Перенаправлять на букинг можно или на 1 или на второй шаг. По дефолту сабмитим на 1-ой шаг букинга

  if (isRaceAurora(currentRace)) {
    // Это рейс Авроры
    bookingStep = 1;

    switch (bookingStep) {
      case 1:
          // Сабмит на Аврора, шаг 1.
          var BOOKING_URL1_AURORA    = 'http://www.flyaurora.ru/booking/#ru';
          /* Аврора
             Пример урла http://flyaurora.ru/booking/#язык/отправление/прибытие/дата_туда/дата_обратно/класс/тип_рейса/кол_взрослых/кол_детей/кол_младенцев */

          if ($('#go_back').prop('checked')){
            direction = 1;
          }
          else {
            direction = 0;
          }
          switch (classServiceVal) {
            case 'PremiumCoachClass':
              classService = '2';
              break;
            case 'BusinessClass':
              classService = '3';
              break;
            default:
              classService = '1';
          }
          
          bookingURL = BOOKING_URL1_AURORA;
          bookingURL += '/' + departCity;
          bookingURL += '/' + returnCity;
          bookingURL += '/' + depDayD + '.' + depMonthM + '.' + depYearYYYY;
          bookingURL += '/' + retDayD + '.' + retMonthM + '.' + retYearYYYY;
          bookingURL += '/' + classService;
          bookingURL += '/' + direction;
          bookingURL += '/' + amountBig;
          bookingURL += '/' + amountChild;
          bookingURL += '/' + amountBaby;          
        break;
      case 2:
          // Сабмит на Аврора, шаг 2.

          // Не существует
          return false;
    }
  } else {
    // Это НЕ рейс Авроры, отправляем на АФЛ
    bookingStep = 1;

    switch (bookingStep) {
      case 1:
          // Сабмит на АФЛ, шаг 1.
          var BOOKING_URL1_AFL       = 'http://www.aeroflot.ru/cms/booking';
          /* АФЛ
             Пример урла http://www.aeroflot.ru/cms/booking/<FROM>/<TO>/<B|C|E>/<OW|RT>/<MMDD>/<MMDD>/<ADT>/<CHD>/<IFS>/<INF>/<YTH>/<RM>
             http://www.aeroflot.ru/cms/booking/MOW/LED/E/RT/0128/0130/2/3/3/2/1
             Даты: сначала месяц в виде цифры от 01 до 12, потом дата от 01 до 31
             <B|C|E> - Класс обслуживания
              B - Бизнес
              С - Комфорт
              E - Эконом
             <OW|RT> - Направление
              OW - В одну сторону
              RT - Туда и обратно 
             <ADT> - взрослые
             <CHD> - дети
             <IFS> - младенцы с местом
             <INF> - младенцы без места
             <YTH> - молодежь                           
             Существует ограничение по максимальному кол-ву пассажиров в одном бронирований - 6 (шесть) в сумме по всем типам пассажиров.
             Если больше 6-и, как в приведенной мной ссылке, то при нажатии кнопки <найти рейсы> будет выводиться ошибка. */

          if ($('#go_back').prop('checked')){
            direction = 'RT';
          }
          else {
            direction = 'OW';
          }

          switch (classServiceVal) {
            case 'PremiumCoachClass':
              classService = 'C';
              break;
            case 'BusinessClass':
              classService = 'B';
              break;
            default:
              classService = 'E';
          }

          bookingURL = BOOKING_URL1_AFL;
          bookingURL += '/'+departCity;
          bookingURL += '/'+returnCity;
          bookingURL += '/'+classService;
          bookingURL += '/'+direction;
          bookingURL += '/'+depMonthMM+depDayDD;
          bookingURL += '/'+retMonthMM+retDayDD;
          bookingURL += '/'+amountBig;
          bookingURL += '/'+amountChild;
          bookingURL += '/'+amountBaby;
        break;
      case 2:
          // Сабмит на АФЛ, шаг 2.
          var BOOKING_URL2_AFL_START = 'https://booking.aeroflot.ru/meridia?mode=booking';
          var BOOKING_URL2_AFL_END   = '&action=airRequest&page=requestAirMessage_air&realRequestAir=realRequestAir&rem1=aeroflotmain&rem2=&rem3=&rem4=&rem5=&language=ru&kiosk=0&geoCountry=ru&direction=returntravel&actionType=nonFlex&depTime=0500&retTime=0500&ADT=1&CHD=0&IFS=0&INF=0&YTH=0&classService=CoachClass&flightType=0';
          /* АФЛ
             Пример урла https://booking.aeroflot.ru/meridia?mode=booking&departCity=LED&returnCity=ALG&depDay=12&depMonth=DEC&retDay=28&retMonth=DEC&action=airRequest&page=requestAirMessage_air&realRequestAir=realRequestAir&rem1=aeroflotmain&rem2=&rem3=&rem4=&rem5=&language=ru&kiosk=0&posid=7B47&geoCountry=ru&direction=returntravel&actionType=nonFlex&depTime=0500&retTime=0500&ADT=1&CHD=0&IFS=0&INF=0&YTH=0&classService=CoachClass&flightType=0
             чтобы поменять валюту в рубли, нужно в параметрах урла заменить &posid=80T7 (доллары) на &posid=7B47 (рубли) */
          var currency;
          switch(currencyCSV) {
            case 'RUB':
                currency = '7B47';
              break;
            case 'USD':
                currency = '80T7';
              break;
            case 'EURO':
                currency = '1';
              break;
          }
          classService = classServiceVal;

          bookingURL = BOOKING_URL2_AFL_START;
          bookingURL += '&departCity='+departCity;
          bookingURL += '&returnCity='+returnCity;
          bookingURL += '&depDay='+depDayD;
          bookingURL += '&depMonth='+depMonthMMM;
          bookingURL += '&retDay='+retDayD;
          bookingURL += '&retMonth='+retMonthMMM;
          bookingURL += '&posid='+currency;
          bookingURL += '&classService='+classService;
          bookingURL += '&ADT='+amountBig;
          bookingURL += '&CHD='+amountChild;
          bookingURL += '&INF='+amountBaby;
          bookingURL += BOOKING_URL2_AFL_END;
        break;
    }
  }

  // Уходим на букинг
  window.open(bookingURL);
}

function isRaceAurora(currentRace) {
  // Обрабатываем все полёты через букинг АФЛ
  return false;
}

function activateBookFields(){

  $('.input-extended').click(function(){
    $(this).find('.yui-ac-input').focus();
  });
  $(".yui-ac-input").focus(function(){
    $(this).parents('.input-extended').addClass('-style_focused');
  }).blur(function(){
    $(this).parents('.input-extended').removeClass('-style_focused');
  });
  $(".j-calendar").focus(function(){
    $(this).parents('.b-bookDate').addClass('-style_focused');
  }).blur(function(){
    $(this).parents('.b-bookDate').removeClass('-style_focused');
  });

}

function getDirections(departCity,returnCity) {
  // Города куда летим
  var directions = {};
  directions.from = departCity.substr(departCity.indexOf(")")+2,3);
  directions.to = returnCity.substr(returnCity.indexOf(")")+2,3);

  return directions;
}

function bookingReset() {
  $('#id_departCity_c, #id_returnCity_c, .j-calendar').val('');
  $('#depCityExtendButton, #retCityExtendButton').removeClass('close').addClass('expand');
  $('.b-bookDate.-type_back').parents('.controls').removeClass('-show_data').addClass('-hide_data');
}

function showBackDirectData(){
  $(document).on("click", ".controls.-hide_data", function(event) {event.stopImmediatePropagation(); return false;});
  if($('#go_back').is(":checked")){
    $('#go_back').parents('.controls').addClass("-show_data").removeClass('-hide_data');
  }else{
    $('#go_back').parents('.controls').addClass("-hide_data").removeClass('-show_data');
  }
  $('#go_back').change(function(){
    if($(this).is(":checked")){
      $(this).parents('.controls').addClass("-show_data").removeClass('-hide_data');
    }else{
      $(this).parents('.controls').addClass("-hide_data").removeClass('-show_data');
    }
  });
}
