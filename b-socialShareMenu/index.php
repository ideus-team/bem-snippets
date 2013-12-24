<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>Social share menu</title>  
  <link rel="stylesheet" href="css/main.css" />
  <!--[if lte IE 8]>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
    <script src="js/legacy/ie8.js"></script>
  <![endif]-->
  <!--[if gte IE 9]><!-->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-2.0.3.min.js"><\/script>')</script>
  <!--<![endif]-->
    <script src="js/plugins/share42.js"></script>
    <script src="js/main.js"></script>
    
  <meta property="og:type" content="company" />
  <meta property="og:title" content="«Аврора»" />
  <meta property="og:url" content="http://<?=$_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI']?>" />     
  <meta property="og:description" content="Новая дальневосточная авиакомпания!" />              
  <meta property="og:image" content="http://<?=$_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI']?>img/social/og-image.png" />
  <meta property="og:site_name" content="«Аврора»" />
</head>
<body>
  <div class="l-wrapper">
    <header class="l-siteHeader" role="banner">
      <div class="b-socialShare share42init" data-url="http://<?=$_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI']?>" data-title="«Аврора»" data-image="http://<?=$_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI']?>img/social/og-image.png" data-description="Новая дальневосточная авиакомпания!" data-path="img/social/" data-zero-counter="0"></div>
    </header>
  </div>
</body>
</html>