#Ручная оптимизациия скорости загрузки страницы за счет отложенной подгрузки соц. шаринга

**Макросы, которые вам нужно будет заменить:**
- *YOUR-SITE-URL.com* = url вашей страницы
- *FB-API-ID* = id вашей кнопки в аккаунте Fb
- *VK-API-ID* = id вашей кнопки в аккаунте Vk

В шаблоне удаляем оригинальные js-коды кнопок соц. шаринга, оставляем только относящийся к ним html-код.
```html
<!-- twitter -->
<a href="https://twitter.com/share" class="twitter-share-button">Твитнуть</a>

<!-- facebook -->
<div class="fb-like" data-layout="button_count" data-width="130" data-show-faces="true"></div>
<div id="fb-root"></div>

<!-- vk -->
<div id="vk_like"></div>

<!-- odnoklassniki -->
<div id="ok_shareWidget"></div>

<!-- Google+ -->
<div class="g-plusone" data-size="medium" data-annotation="inline" data-width="120"></div>
```
В js добавляем отложенную подгрузку переписанного кода соц. кнопок:
```javascript
$(window).load(function () {
  loadSocialSharingButtons();
});

function loadSocialSharingButtons() {
  // twitter button
  $.getScript("//platform.twitter.com/widgets.js", function(data, textStatus, jqxhr) {});


  // facebook button
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&appId=FB-API-ID&version=v2.0";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));


  // vk button
  $.getScript("//userapi.com/js/api/openapi.js?115", function(data, textStatus, jqxhr) {
    VK.init({apiId: VK-API-ID, onlyWidgets: true});
    VK.Widgets.Like("vk_like", {type: "button", height: 20});
  });


  // odnoklassniki button
  // @url: http://apiok.ru/wiki/pages/viewpage.action?pageId=42476656
  !function (d, id, did, st) {
    var js = d.createElement("script");
    js.src = "http://connect.ok.ru/connect.js";
    js.onload = js.onreadystatechange = function () {
    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
      if (!this.executed) {
        this.executed = true;
        setTimeout(function () {
          OK.CONNECT.insertShareWidget(id,did,st);
        }, 0);
      }
    }};
    d.documentElement.appendChild(js);
  }(document,"ok_shareWidget","http://YOUR-SITE-URL.com","{width:145,height:30,st:'straight',sz:20,ck:1}");


  // Google+
  window.___gcfg = {
    lang: 'ru',
    parsetags: 'onload'
  };
  $.getScript("//apis.google.com/js/platform.js", function(data, textStatus, jqxhr) {});
}
```
