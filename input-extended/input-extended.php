<!DOCTYPE HTML>
<html lang="en-US">
<head>
  <meta charset="UTF-8">
  <title></title>
  <link rel="stylesheet" href="css/input-extended.css"/>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
  <script type="text/javascript" src="http://www.aeroflot.ru/cms/geoip.php"></script>
  <script type="text/javascript" src="js/_booking-external.js"></script>
  <script type="text/javascript" src="js/_booking.js"></script>
  <script type="text/javascript" src="js/main.js"></script>
</head>
<body>
  <form action="#" class=" j-Form">
    <div class="controls">
        <label  for="id_departCity_c" class="b-controlLabel -num_1">Откуда</label>
        <div id="depCityAutoComplete" class="b-depCityAutoComplete">
          <span class="input-extended"><span id="depCityExtendButton"></span>
          <input value="" id="id_departCity_c" class="b-findForm__inputText" name="departCity_c" type="text" />
          </span>
          <div class="ac-dialog b-depCityAcBox" id="depCityAcBox">
              <div class="popup_wrapper">
                  <div id="id_departCityContainer" class="popup_infoblock"></div>
                  <div class="popup_closer">
                      <a href="javascript:void 0;" class="popup_closer_btn"></a>
                  </div>
                  <div class="clear0"></div>
              </div>
          </div>
          <div class="s-dialog" id="depCitySelectBox">
              <div class="bd"></div>
          </div>
        </div>
        <input value="" id="id_departCity" name="departCity" type="hidden" />
      </div>
      <div class="controls">
        <label for="id_returnCity_c" class="b-controlLabel -num_1">Куда</label>
          <div id="retCityAutoComplete" class="b-retCityAutoComplete">
            <span class="input-extended"><span id="retCityExtendButton"></span>
              <input value="" id="id_returnCity_c"  class="b-findForm__inputText" name="returnCity_c" type="text" />
            </span>
            <div class="ac-dialog b-retCityAcBox" id="retCityAcBox">
                <div class="popup_wrapper">
                    <div id="id_returnCityContainer" class="popup_infoblock"></div>
                    <div class="popup_closer">
                        <a href="javascript:void 0;" class="popup_closer_btn"></a>
                    </div>
                </div>
            </div>
            <div class="s-dialog" id="retCitySelectBox">
                <div class="bd"></div>
            </div>
          </div>
          <input value="" id="id_returnCity" name="returnCity" type="hidden" />
      </div>
    </div>
    <input type="hidden" name="action" value="airRequest" />
    <input type="hidden" name="page" value="requestAirMessage_air" />
    <input type="hidden" name="realRequestAir" value="realRequestAir" />

    <input type="hidden" name="rem1" value="aeroflotmain" />
    <input type="hidden" name="rem2" value="" />
    <input type="hidden" name="rem3" value="" />
    <input type="hidden" name="rem4" value="" />
    <input type="hidden" name="rem5" value="" />


    <input type="hidden" name="language" value="ru" />
    <input type="hidden" name="kiosk" value="0" />
    <input type="hidden" name="posid" value="" id="id_posid" />
    <input type="hidden" name="geoCountry" value="ru" />
  </form>
</body>
</html>