 <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
 <script src="js/scripts.js"></script>
 <link rel="stylesheet" href="css/main.css" />

 <div class="l-form">
  <form class="b-form js-validation" action="" method="post">
    <div class="b-form__controls">
      <label for="name" class="b-form__label">Username :</label>
      <div class="b-form__control">
        <input id="name" class="b-form__field" type="text" name="name" required="">
      </div>
    </div>
    
    <div class="b-form__controls">
      <label for="password" class="b-form__label">Password:</label>
      <div class="b-form__control">
        <input id="password" class="b-form__field" type="password" name="password" required="">
      </div>
    </div>
    
    <div class="b-form__controls -type_helpers">
      <div class="b-form__control">
        <label class="b-form__label -type_remember">
          <input type="checkbox"> Remember me
        </label>
        <a href="" class="b-form__link -type_hint -align_right">Forgot Password?</a>
      </div>
    </div>
    <div class="b-form__controls -type_submit">
      <div class="b-form__control">
        <button type="submit" class="b-form__button">Submit</button>
      </div>
    </div>
  </form>
</div>