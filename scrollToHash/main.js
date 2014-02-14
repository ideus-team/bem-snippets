/**
 <a class="b-terminalLink j-scrollLink" href="#terminal1"></a>
 <a class="b-terminalLink j-scrollLink" href="#terminal2"></a>
 
 <div class="b-terminalContent" id="terminal1"></div>
 <div class="b-terminalContent" id="terminal2"></div>
*/

$(document).ready(function () {
  intscrollTo();  
});

function intscrollTo(){ 
  $('.j-scrollLink').click(function(event) {
    event.preventDefault();
    var link = this;
    $.smoothScroll({
      scrollTarget: link.hash,
      speed: 2000
    });
  });
}
