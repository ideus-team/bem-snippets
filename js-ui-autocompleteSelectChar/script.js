/* autocompleteFn */
// autocomplete с выделением набраной буквы в выпадающем списке
function autocompleteFn(){
	var searchArray = [
		'Маркер MacDev Clone GTi Red/Gold',
		'Маркер MacDev',
		'Маркер MacDev Clone GTi Gold',
		'Маркер Red/Gold',
		'Маркер GTi', 
		'Маркер MacDev GTi Red',
		'Маркер GTi Red/Gold'
	]
	var input = $('.search-input');
	input.autocomplete({
		minLength: 0,
		source: searchArray,
		select: function( event, ui ) {
			input.val(ui.item.label);
			return false;
		},
		open: function(event, ui){
			var widget = $( this ).autocomplete( "widget" );
			var input = $( this ).val();
			var leng = input.length;
			if ( leng > 0 ) {
				var cur_ul = widget;
				var all_li = cur_ul.find('li:not(:last)');
				var link = all_li.find('a');
				setTimeout(function(){
					link.each(function(i, el){
						var text = $(el).html();
						
						// метод глобальног опоиска по букве
						input = input.toString();
						var re = new RegExp(input, "gi");
						var search = text.match(re);
						$.each(search, function(i, el){
							var newReg = new RegExp(el+'(?!<)', 'g');
							text = text.replace(newReg, '<span>'+el+'</span>');
						});
						$(el).html('').append(text);
						
						// метод только для первых символов
						
						// var lengText = text.slice(0, leng);
						// text = text.substr(leng);
						// var newText = $(el).html('').prepend('<span>'+lengText+'</span>'+text+'');
					});
				}, 0);
			}
		},
		position: {
			my: "left-25 top+3",
			at: "left bottom"
		}
	}).data( "ui-autocomplete" )._renderItem = function( ul, item ) {
      return $( "<li>" )
        .append( "<a>" + item.label + "</a>" )
        .appendTo( ul );
    };
}
/* autocompleteFn end */