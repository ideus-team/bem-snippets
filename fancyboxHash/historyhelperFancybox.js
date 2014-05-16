/*!
 * History helper for fancyBox
 * version: 1.0.0 (Thu, 18 Oct 2012)
 * @requires fancyBox v2.1.3 or later
 *
 * Usage:
 *
 *  1) Create gallery using the same "rel" attribute -
 *
 *    <a rel="gallery" class="fancybox" href="image1_big.jpg"><img src="image1_small.jpg" alt=""/></a>
 *    <a rel="gallery" class="fancybox" href="image2_big.jpg"><img src="image2_small.jpg" alt=""/></a>
 *
 *  2) Include all files and initialize -
 *
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             history: true
 *         }
 *     });
 *
*/
$.fancybox.helpers.history = {
	current_hash : false,
	parse_hash   : function() {
		var hash = window.location.hash.substr(1),
			rez,
			gallery,
			index,
			group,
			item;

		if (hash && hash.length) {
		/* 	  rez     = hash.split('-');
			gallery = rez[0] + "";
			index   = parseFloat( rez[1] );
			group  = $("a[rel=" + gallery + "]");  */
          
         
          gallery = "gallery";
         var ii = $('a[rel="'+hash+'"]');
         index = $('#itemContainer a.itemMenu__itemLink.-type_fancybox').index(ii)+1;
         group  = $("a[rel=" + gallery + "]"); 



			if (!group.length) {
				group = $("a[data-fancybox-group=" + gallery + "]");
			}

			index = index > 0 ? index - 1 : 1;
			//item  = group.eq( index );
			item  = ii;
		}

		return [ hash, gallery, index, item ];
	},
	check_hash : function() {
		var rez = this.parse_hash();
		if (!rez[0] && this.current_hash) {
			$.fancybox.close();

			return;
		}

		if (rez[0] !== this.current_hash) {

			// if gallery is already open, then navigate to selected index
			if (rez[1] && $.fancybox.isActive && ($.fancybox.current.element.data('fancybox-group') === rez[1] || $.fancybox.current.element.attr('rel') === rez[1])) {
				$.fancybox.jumpto( rez[2] );

			} else if (rez[ 3 ] && rez[ 3 ].length) {
				// Try to find and open a gallery
				rez[ 3 ].trigger('click');
			}
		}
	},

	init : function() {
		var rez = this.parse_hash();

		// Check hash if user uses back/forward buttons
		$(window).bind('hashchange', $.proxy( this.check_hash, this) );

		// Check hash on page start
		if (rez[ 3 ] && rez[ 3 ].length) {
			rez[ 3 ].attr('data-fancybox-start', 1);
		}
	},

	beforeShow : function(opts, obj) {
		var gallery = $(obj.element).attr('rel') || 'gallery';
		
		gallery += '\s'; //for Chrome
		
		// Update window hash
		window.location.hash = this.current_hash = gallery;
	},
	beforeClose : function() {
		// Clear current hash,
		this.current_hash = false;
	},
	afterClose : function() {
		// Remove hash from location bar
		var W = $(window), scrollV, scrollH, loc = window.location;

		if ("pushState" in history) {
			history.pushState("", document.title, loc.pathname + loc.search);

		} else {
			// Prevent scrolling by storing the page's current scroll offset
			scrollV = W.scrollTop();
			scrollH = W.scrollLeft();

			loc.hash = "";

			// Restore the scroll offset
			W.scrollTop( scrollV );
			W.scrollLeft( scrollH );
		}
	}
}

// Self initialise
if (jQuery.isReady) {
	$.fancybox.helpers.history.init();

} else {
	$(document).ready(function() {
		$.fancybox.helpers.history.init();
	});
}