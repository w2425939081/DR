/*
 首页实体店临时救急js
2016.01.22
*/
define(function(require,exports,module){
	/*通过 require 引入依赖*/
	require('jquery');
	var Banner = require('/drjs/modules/banner.js');
	var twoTabs = require('/drjs/modules/twoTabs.js');
	var Imgscroll = require('/drjs/modules/scrolling.js');
	  
	window.onload = function () {
		//点击全国一览显示地图
		$('#drMapLook').off('click').on('click',function(){
			$('#drMapShow').show();
			$('#drhongkong').hide();
			$('.drstore-tabin').hide();
		});
		//点击香港显示香港店
		$('#drlookhk').off('click').on('click',function(){
			$('#drMapShow').hide();
			$('.drstore-tabin').hide();
			$('#drtheHK').show();
		});
		//店铺区域切换效果
		var shopTabs = new twoTabs().init({
			id:'#drstore-tab',
			firstWidth:98,
			otherWidth:125,
			timer: 500
		});
		//显示店铺地址
		$('.drstore-tittle img').off('click').on('click',function(){
			showIndexMap();
		});
		
	    //调用banner组件
		var indexBan = new Banner().init({
		    id: '#drHomeBan',
		    btnListId: '#drHomeBanxd',
		    btnListClass: 'drbanner_click',
		    nextBtn: '#drbanNext',
		    prevBtn: '#drbanPrev'
		});
	    //关闭店铺地址
		$('.drshopMapInfo-close').off('click').on('click', function () {
		    $('.dr_blackwall').hide();
		    $('.drshopMap').stop(false, false).fadeOut();
		});

	    //点击地图店铺分页
		$('.drstore-mapInfo-pager a').off('click').on('click', function () {
		    $('.drstore-mapInfo-pager a').removeClass('activate');
		    $(this).addClass('activate');
		    $('.drstore-shopList .drstore-shopDesc').hide().eq($(this).index()).show();
		});
	    //点击地图省份
		$('.drstore-map a.hasShop').off('click').on('click', function () {
		    var name = $(this).text();
		    $("#link2").hide();
		    $.get("/nAPI/AddressInfo.ashx", { action: "procode", address: name }, function (data) {
                
		        $("#proid").html(name);
		        var str = "";
		        var str2 = "";
		        for (var item in data) {
                    
		            if (parseInt(item) < 2) {
		                str += '<div class="drstore-mapInfo-shop"><h5><a href="/' + data[item].customUrl + '">' + data[item].shopname.replace("实体", "") + '></a></h5>  <p title="' + data[item].address + '">' + data[item].address + '</p>';
		                str += ' <p>营业时间：' + data[item].buz_starttime_hour + '：' + data[item].buz_starttime_min + '-' + data[item].buz_endtime_hour + '：' + data[item].buz_endtime_min + '</p>';
		                str += '<p>预约电话：' + data[item].shopphone + '</p></div>';
		            } else if (parseInt(item) >= 2 && parseInt(item) < 4) {
		                $("#link2").show();
		                str2 += '<div class="drstore-mapInfo-shop"><h5><a href="/' + data[item].customUrl + '">' + data[item].shopname.replace("实体", "") + '></a></h5>  <p title="' + data[item].address + '">' + data[item].address + '</p>';
		                str2 += ' <p>营业时间：' + data[item].buz_starttime_hour + '：' + data[item].buz_starttime_min + '-' + data[item].buz_endtime_hour + '：' + data[item].buz_endtime_min + '</p>';
		                str2 += '<p>预约电话：' + data[item].shopphone + '</p></div>';
		            }

		        }

		        $("#shoplist1").html(str);
		        $("#shoplist2").html(str2);
		    });
		    $('.drstore-map a.hasShop').removeClass('activate');
		    $(this).addClass('activate');

		});

	    //调用图片滚动组件(华东区)
		var Thescrol1 = new Imgscroll().init({
		    id: '#shopfirst',
		    prev: '#shopfirst .drstore-pre',
		    next: '#shopfirst .drstore-next',
		    scrollNum: 1,
		    box: '.drstore_alllist',
		    boxlist: 'span',
		    theMag: 0,
		    Alllist: 5,
		    overlist: 4,
		    theway: true,
		    overnum: 7,
		    thebutton: true
		});
	    //调用图片滚动组件(华北区)
		var Thescrol2 = new Imgscroll().init({
		    id: '#shopsec',
		    prev: '#shopsec .drstore-pre',
		    next: '#shopsec .drstore-next',
		    scrollNum: 1,
		    box: '.drstore_alllist',
		    boxlist: 'span',
		    theMag: 0,
		    Alllist: 5,
		    overlist: 4,
		    theway: true,
		    overnum: 7,
		    thebutton: true
		});
	    //调用图片滚动组件(华中区)
		var Thescrol3 = new Imgscroll().init({
		    id: '#shopthird',
		    prev: '#shopthird .drstore-pre',
		    next: '#shopthird .drstore-next',
		    scrollNum: 1,
		    box: '.drstore_alllist',
		    boxlist: 'span',
		    theMag: 0,
		    Alllist: 5,
		    overlist: 4,
		    theway: true,
		    overnum: 7,
		    thebutton: true
		});
	    //调用图片滚动组件(华南区)
		var Thescrol4 = new Imgscroll().init({
		    id: '#shopfour',
		    prev: '#shopfour .drstore-pre',
		    next: '#shopfour .drstore-next',
		    scrollNum: 1,
		    box: '.drstore_alllist',
		    boxlist: 'span',
		    theMag: 0,
		    Alllist: 5,
		    overlist: 4,
		    theway: true,
		    overnum: 7,
		    thebutton: true
		});
	    //调用图片滚动组件(西南区)
		var Thescrol5 = new Imgscroll().init({
		    id: '#shopfive',
		    prev: '#shopfive .drstore-pre',
		    next: '#shopfive .drstore-next',
		    scrollNum: 1,
		    box: '.drstore_alllist',
		    boxlist: 'span',
		    theMag: 0,
		    Alllist: 5,
		    overlist: 4,
		    theway: true,
		    overnum: 7,
		    thebutton: true
		});


	    // 点击城市执行以下代码
	    // $('#drMapShow').hide();
	    // $('.drstore-tabin').show();
	}
});


