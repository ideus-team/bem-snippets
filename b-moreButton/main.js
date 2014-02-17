/**
 
<div class="-state_close"> text </div>
<a class="j-eventNewsMore" href="">Подробнее</a>
 
 
*/

$(document).ready(function () {
  intEventNewsMore();
});

function intEventNewsMore(){ 
    $('.j-eventNewsMore').click(function(){   
      if ($(this).prev().hasClass('-state_close')) {
        $(this).prev().animate({height: '100%'}, 'slow').removeClass('-state_close').addClass('-state_open');        
        $(this).empty().text('Свернуть');
      } else {
        $(this).prev().animate({
          height: '80px'
        }, 'slow');       
        $(this).prev().removeClass('-state_open').addClass('-state_close');       
        $(this).empty().text('Подробнее');
        $(this).show();
      }
      return false;
    }); 
    
}
