//首页品牌文化弹窗JS
define(function(require,exports,module){
	/*通过 require 引入依赖*/
	require('jquery');	
	$(function(){
		//页面增加css
		$("<link>").attr({rel:"stylesheet",type:"text/css",href:"holiday/DRbrand/css/DRbrand.css"}).appendTo("head");
		$('.dr_blackwall').show();
		//页面增加背景
		$('.dr_footer').append('<div class="DRbrand_tc"><a href="http://www.darryring.com/darry_ring" target="_blank" class="DRbrand_first"></a><a href="http://www.darryring.com/culture" target="_blank" class="DRbrand_sec"></a><span class="DRbrand_close"></span><i class="DRbrand_gif"></i><i class="DRbrand_num" timeData="10">10</i></div>');
		$('.DRbrand_close,.DRbrand_tc a').click(function () {
			$('.dr_blackwall,.DRbrand_tc').hide();
			clearInterval(ctTimer);
		});
		//倒计时跳转页面
		var countDown = $('.DRbrand_num');
		var ctTimeNum,ctTimer;
		if(countDown){
			ctTimeNum = parseInt(countDown.attr('timeData'));
			ctTimer = setInterval(function(){
				ctTimeNum--;
				countDown.html(ctTimeNum);
				if(ctTimeNum <= 0){
					clearInterval(ctTimer);
					$('.dr_blackwall,.DRbrand_tc').hide();
				}
			},1000);
		}
	});
});