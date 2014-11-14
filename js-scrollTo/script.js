/* scrollLinks */
function scrollLinks(parent, indent, delay){
	var links = $(parent).find('a');
	$(links).each(function(index, item){
		var id = $(item).attr('href');
		if ( id.length ){
			$(item).on('click', function(e){
        $(links).removeClass('-state_current');
        $(this).addClass('-state_current');
				var idOffset = $(id).offset().top - indent;
				$('html, body').animate({ scrollTop: idOffset }, delay);
				e.preventDefault();
			});
		}
	});
}

// parent - родитель в котором лежат нужные ссылки-якоря
// indent - отступ, который минусует положение при проскролливании
// delay - скорость с которой будет идти скролл к блоку
// в HREF ссылки ставим ID блока, к которому нужен скролл при клике

/* scrollLinks end */

$(document).ready(function(){
  scrollLinks($('.b-menu'), 0, 300);
});