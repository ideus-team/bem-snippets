<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title></title>
  <script type="text/javascript" src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script type="text/javascript">
    $(document).ready(function(){
      
      $('#contact_from').on('submit', function(e){
        
        var name = $('[name="contact_name"]').val();
        var mail = $('[name="contact_email"]').val();
        var message = $('[name="contact_message"]').val();
        var data = {contact_name: name, contact_email: mail, contact_message: message};
        $.ajax({
          url: 'mail_test.php',
          type: "POST",
          data: data,
          success: function(){
            console.log('Send success');
          },
          error: function(){
            console.log('Send error');
          }
        });
        
        e.preventDefault();
      });
      
    });
  </script>
</head>
<body>
	<form action="#" method="post" id="contact_from">
  <div>
  	<input type="text" name="contact_name"/>
  </div>
  <div>
  	<input type="text" name="contact_email"/>
  </div>
  <div>
    <textarea name="contact_message"></textarea>
  </div>
  <div>
    <input type="submit" value="Отправить"/>
  </div>
</form>
</body>
</html>

