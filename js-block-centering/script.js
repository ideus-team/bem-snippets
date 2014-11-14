/* yCenter вставить вызов функции в ready и в resize */
// центрирование блока по центру
function yCenter(obj, min){
	if ( $(obj).length ){
		var wh = $(window).height();
		var header = $('.header').height();
		var footer = $('.footer').height();
		var block = $(obj).height();
		var min = min;
		var indent = (wh - ( header+footer+block )) / 2;
		if ( indent >= min ) $(obj).css('margin-top', indent+'px');
		else $(obj).css('margin-top', min+'px');
	}
}
/* yCenter end */

$(document).ready(function(){
  yCenter($('.blockClassName'), 10);
});