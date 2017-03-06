//首页情人气氛JS
define(function(require,exports,module){
	/*通过 require 引入依赖*/
	require('jquery');	
	$(function(){
		//页面增加css
		$("<link>").attr({rel:"stylesheet",type:"text/css",href:"holiday/valentine/css/valentine_index.css"}).appendTo("head");
		//页面增加背景
		$('.dr_pink').prepend('<div class="valentine_gdbk"><img src="holiday/valentine/img/gdbk.jpg" /></div>');
		bkscroll();
		$(window).scroll(function(){
			bkscroll();
		});
		//固定背景
		function bkscroll(){
			if($('.dr_store').offset().top + 80 - $(window).scrollTop() <= 0){
				$('.valentine_gdbk').addClass('fixed')
			}else{
				$('.valentine_gdbk').removeClass('fixed');
			}
		};
	});
});