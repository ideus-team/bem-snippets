$(document).ready(function () {
  scrollSidebar();
});

function scrollSidebar(){
 $.fn.scrollBottom = function() {
        return $(document).height() - this.scrollTop() - this.height();
    };

    var $el = $('.j-scrollSidebar');
    var $window = $(window);
    var SPACETOP = 1;  
    var SPACESCROLLTOP = 1;
    
    var top = $el.parent().position().top + SPACETOP;

    $window.bind("scroll resize", function() {
        var gap = $window.height() - $el.height() - 100;
        var visibleFoot = 520 - $window.scrollBottom();
        var scrollTop = $window.scrollTop()

        if (scrollTop < top - 10) {
            $el.css({
                top: (top - scrollTop) + "px",
                bottom: "auto"
            });
        } else if (visibleFoot > gap) {
            $el.css({
                top: "auto",
                bottom: visibleFoot + "px"
            });
        } else {
            $el.css({
                top: SPACESCROLLTOP,
                bottom: "auto"
            });
        }
    }).scroll();
}