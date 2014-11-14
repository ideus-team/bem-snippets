<?php

  include 'Mail.php';
  include 'Mail/mime.php';
  
  $name = $_POST['contact_name'];
  $mail = $_POST['contact_email'];
  $message = htmlspecialchars_decode($_POST['contact_message']);
  
  echo $name;
  echo $mail;
  echo $message;
  
  $text = 'iDeus feedback mail.';
  $html = '<html><body>'.$message.'</body></html>';
  //$file = '/home/richard/example.php';
  $crlf = "\n";
  $hdrs = array(
                'From'    => $name.'<'.$mail.'>',
                'Subject' => 'С сайта iDeus'
                );

  $mime = new Mail_mime(array('eol' => $crlf));

  $mime->setTXTBody($text);
  $mime->setHTMLBody($html);
  //$mime->addAttachment($file, 'text/plain');

  $body = $mime->get();
  $hdrs = $mime->headers($hdrs);

  $mail =& Mail::factory('mail');
  $mail->send('mrmasterix@gmail.com', $hdrs, $body);

?>