<?php
// Если страна не определилась
$COUNTRY_DEFAULT = 'ua';
$CITY_DEFAULT    = 'kharkiv';

// Детект страны и города по IP
// Docs: https://sypexgeo.net/ru/docs/
include('inc/vendor/SxGeo.php');
$SxGeo = new SxGeo('inc/vendor/SxGeoCity.dat');
$geo = $SxGeo->getCity($_SERVER['REMOTE_ADDR']);

$country = ($geo) ? strtolower($geo['country']['iso'])  : $COUNTRY_DEFAULT;
$city    = ($geo) ? strtolower($geo['city']['name_en']) : $CITY_DEFAULT;

/* Если вам нужно, можете сделать редирект по условию:
if ($country == 'ua') {
  header('Location: /ua/');
} else {
  header('Location: /en/');
}
*/
?>

<!-- Добавьте классы-модификаторы в ваш <body> -->
<body class="-country_<?php echo $country; ?> -city_<?php echo $city; ?>">

<?php  
/* Внутри шаблона вы можете делать любые проверки:  
  <?php if ($country == 'ua') :?>
    // Код для Украины
  <?php else: ?>
    // Код для всех остальных
  <?php endif; ?>
  
  <?php if ($city == 'kharkiv') :?>
    //  Код для Харькова
  <?php else: ?>
    // Код для всех остальных
  <?php endif; ?>  
*/  
?>

<!--  
<script>
/* Проверять можно и из JS:
    if ($('body').hasClass('-country_ua')) {
      // Код для Украины
    } else {
      // Код для всех остальных
    }  
  
    if ($('body').hasClass('-city_kharkiv')) {
      //  Код для Харькова
    } else {
      // Код для всех остальных
    }    
*/
</script>
-->