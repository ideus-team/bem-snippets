/*
** Author: Oksana Blonskaya
** This code allows us create simple pager using jquery and don't use program languages such as php.
** You can see how work this code here http://riverprairiedental.com/testimonials.html 
*/

function simplePager(){   
  $(".j-pager").each(function(){
    var pager = $(this);
    var countPages = Math.ceil($(".b-post__item").size()/5); // Each page includes 5 or less posts
    console.log(countPages);
    for(var i=0; i<countPages; i++){
      pager.append('<li class="b-pager__item"><a href="#" class="b-pager__link">'+(i+1)+'</a></li>'); // Create pager items and links
    }
  });
  $(".b-pager__item").each(function(){
    var elem = $(this);
    definePostsForPage(elem);
  });
  $(".b-pager__item").click(function(){
    var elem = $(this);
    definePostsForPage(elem);
    $(".b-pager__link").removeClass("-state_active");
    $(this).find(".b-pager__link").addClass("-state_active");
    $('html, body').animate( { scrollTop: 0 }, 1000 );
    return false;
  }).first().click();
}

function definePostsForPage(elem){
  var indexPagerItem = $(".b-pager__item").index(elem);//Find index of each pager item
  var start = indexPagerItem*5; // define start post for each pager item 
  var end = (indexPagerItem+1)*5; // define end post for each pager item 
  $(".b-post__item").hide();  
  $(".b-post__item").slice(start, end).show(); //Show only those posts which refer to the active pager link
}