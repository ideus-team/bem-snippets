#Ручная оптимизациия скорости загрузки страницы за счет отложенной подгрузки соц. шаринга

В шаблоне удаляем оригинальные js-коды кнопок соц. шаринга, оставляем только относящийся к ним html-код.
```html
<!-- twitter -->
<a href="https://twitter.com/share" class="twitter-share-button" data-url="http://www.aeroflot.ru/cms/special_offers/karaganda" data-text="Приобретайте билеты на новый прямой рейс от Аэрофлота — Караганда - Москва! http://www.aeroflot.ru/cms/special_offers/karaganda" data-via="aeroflot" data-lang="ru">Твитнуть</a>

<!-- facebook -->
<div class="fb-like" data-href="http://www.aeroflot.ru/cms/special_offers/karaganda" data-send="false" data-layout="button_count" data-width="130" data-show-faces="true"></div>
<div id="fb-root"></div>

<!-- vk -->
<div id="vk_like"></div>

<!-- odnoklassniki -->
<div id="ok_shareWidget"></div>

<!-- Google+ -->
<div class="g-plusone" data-size="medium" data-annotation="inline" data-width="120"></div>
```
В конце страницы добавляем отложенную подгрузку js с переписанным кодом соц. кнопок:
```html
<script defer src="js/social-links.js"></script>
```

**Содержимое social-links.js**  
_Не забудьте обновить apiId для Vk и YOUR-SITE-URL.com для OK!_
```javascript
$(window).load(function () {
  // twitter button
  $.getScript("//platform.twitter.com/widgets.js", function(data, textStatus, jqxhr) {});


  // facebook button
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&appId=317571361622394&version=v2.0";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
          

  // vk button
  $.getScript("//userapi.com/js/api/openapi.js?115", function(data, textStatus, jqxhr) {
    VK.init({apiId: 4034267, onlyWidgets: true});
    VK.Widgets.Like("vk_like", {type: "button", height: 20});
  });
        

  // odnoklassniki button
  !function (d, id, did, st) {
  var js = d.createElement("script");
  js.src = "//connect.ok.ru/connect.js";
  js.onload = js.onreadystatechange = function () {
  if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
    if (!this.executed) {
      this.executed = true;
      setTimeout(function () {onOkConnectReady()}, 0);
    }
  }}
  d.documentElement.appendChild(js);
  }(document);
  function onOkConnectReady() {

  OK.CONNECT.insertShareWidget("ok_shareWidget","//YOUR-SITE-URL.com","{width:145,height:30,st:'straight',sz:20,ck:1}");
}


  // Google+
  window.___gcfg = {
    lang: 'ru',
    parsetags: 'onload'
  };
  $.getScript("//apis.google.com/js/platform.js", function(data, textStatus, jqxhr) {});
});
```
