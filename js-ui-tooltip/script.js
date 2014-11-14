/* tooltip */
function tooltip(){ 
	$(document).tooltip({
		items: '[data-tooltip]',
		content: function(){
			var el = $(this);
			var text = el.data('tooltip');
			var tpl = '<div class="b-tooltipContainer"><span class="b-tooltipContainer__corner"></span>'+text+'</div>';
			return tpl;
		},
		position: {
			my: "center bottom-18",
			at: "center top",
			using: function(callback, feedback){
				var el = $(this);
				el.css(callback);
			}
		},
		hide: { duration: 200 }
	});
}

// на тултип нужно повесить position: absolute, чтобы пофиксить баг с частым наведением
// на блок/елемент нужно повесить атрибут data-tooltip и в него писать текст
// Обязательно подключение jQueryUI-tooltip.js

/* tooltip end */