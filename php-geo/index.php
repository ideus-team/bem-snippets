<?php
// Если страна не определилась
$countryDefault = 'ua';

// Детект страны и города по IP
include('inc/vendor/SxGeo.php');
$SxGeo = new SxGeo('inc/vendor/SxGeoCity.dat');
$geo = $SxGeo->getCity($_SERVER['REMOTE_ADDR']);
$country = ($geo) ? strtolower($geo['country']) : $countryDefault;
$city = ($geo) ? $geo['city'] : '';

// Редирект по условию
if ($country == 'ua') {
  header('Location: /ua/');
} else {
  header('Location: /en/');
}
?>

<body class="-country_<?php echo $country; ?> -city_<?php echo $city; ?>">

  <?php if ($country == 'ua') :?>
  <?php else: ?>
  <?php endif; ?>
  