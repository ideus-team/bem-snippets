#Ручная оптимизациия скорости загрузки страницы за счет отложенной подгрузки соц. шаринга
В шаблоне удаляем оригинальные js-коды кнопок соц. шаринга, оставляем только относящийся к ним html-код.
В конце страницы добавляем отложенную подгрузку js с переписанным кодом соц. кнопок:
```
<script defer src="js/social-links.js"></script>
```

**Содержимое social-links.js**  
_Не забудьте обновить apiId для Vk и YOUR-SITE-URL.com для OK!_
```
$(window).load(function () {
  // twitter button
  $.getScript("//platform.twitter.com/widgets.js", function(data, textStatus, jqxhr) {});


  // facebook button
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/ru_RU/all.js#xfbml=1&appId=317571361622394";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
          

  // vk button
  $.getScript("//userapi.com/js/api/openapi.js?101", function(data, textStatus, jqxhr) {
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
  window.___gcfg = {lang: 'ru'};
  $.getScript("//apis.google.com/js/plusone.js", function(data, textStatus, jqxhr) {});
});
```
