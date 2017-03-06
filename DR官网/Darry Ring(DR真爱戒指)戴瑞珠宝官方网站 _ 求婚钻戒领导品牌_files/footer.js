/*
 * 底部入口模块
 * 2015-06-27 14:00
 * */
define(function (require, exports, module) {
    /*通过 require 引入依赖*/
    require('jquery');
    var drToggle = require('/drjs/modules/drtoggle.js');
    $(function () {
        //if (true) {

        //    $(".dr_Reminder").hide();
        //} else {
        //    $(".dr_Reminder").show();
        //}
        /*回到顶部*/
        $('.dr_totop').off('click').on('click', function () {
            $("html,body").stop(true, false).animate({ "scrollTop": 0 + 'px' }, 300)
        });

        /*显示隐藏侧边栏工具*/
        var value = GetCookie("timedown");
        var scrollTop = '';
        var offon = true;
        checkScroll();
        $(window).scroll(function () {
            checkScroll();
        });
        function checkScroll() {
            scrollTop = $(document).scrollTop();
            if (scrollTop >= 200 & offon) {
                offon = false;
                $('#dr-quickservice').show();
                $('.droline_kfword').animate({ left: '-230px', opacity: 1 }, 500).show();
                $('.droline_kfword p').animate({ width: '220px', height: '48px' }, 1000);
                var snowEndDate = new Date('2016/1/25 23:59:59');
                var nowDate = new Date();
                var href = window.location.href;
                if (value == "timedown" || (nowDate > snowEndDate)) {
                    $(".dr_Reminder").hide();
                } else {
                    if (href == "http://www.darryring.com/" || href == "http://www.darryring.com/index.aspx") {
                        $('.dr_Reminder').animate({ left: '-216px', opacity: 1 }, 500).show();
                    }else
                    {
                        $(".dr_Reminder").hide();
                    }

                }

                setTimeout(hidetcword, 6000);
            } else if (scrollTop <= 200) {
                $('#dr-quickservice').hide();
            } else {
                $('#dr-quickservice').show();
            }
        };
        //侧边工具栏提示效果
        $('.dr_quick-cort').off('mouseenter').on('mouseenter', function () {
            $(this).addClass('dr_quickcort-hover').find('.dr_quick-word').stop(false, false).animate({ right: '50px', opacity: 1 }, 500).show();
        }).off('mouseleave').on('mouseleave', function () {
            $(this).removeClass('dr_quickcort-hover').find('.dr_quick-word').stop(false, false).animate({ right: '0', opacity: 0 }, 500).hide();
        });
        //底部帮助中心分享
        var draboutUs = new drToggle().init({
            id: '#dr_help-gz',
            action: '.dr_help-all .comShare'
        });
        //点击关闭客服文字
        $('.droline_kfword span').click(function () {
            hidetcword();
            offon = false;
            return false;
        });
        //点击关闭温馨提示


        $('.dr_Reminder span').click(function () {
            $('.dr_Reminder').animate({ left: '0', opacity: 0 }, 500);
            SetCookie("timedown", "timedown");
            return false;
        });
        showtcword();

        //点击出现客服弹窗(2016.8.8)
        $('.droline_showkf').click(function () {
            $('.dr_blackwall,.drKf_tc').show();
        });
        //点击客服弹窗消失
        $('.drKf_close').click(function () {
            $('.dr_blackwall,.drKf_tc').hide();
        });

        //底部后台程序js代码处



    });
});

//定义加入收藏夹函数
function join_favorite() {
    var siteUrl = window.location.href;
    var siteName = "Darry Ring"

    //捕获加入收藏过程中的异常       
    try {
        //判断浏览器是否支持document.all        
        if (document.all) {
            //如果支持则用external方式加入收藏夹              
            window.external.addFavorite(siteUrl, siteName);
        } else if (window.sidebar) {
            //如果支持window.sidebar，则用下列方式加入收藏夹  
            window.sidebar.addPanel(siteName, siteUrl, '');
        }
        else {
            alert("加入收藏夹失败，请使用Ctrl+D快捷键进行添加操作!");
        }
    }
    //处理异常       
    catch (e) {
        alert("加入收藏夹失败，请使用Ctrl+D快捷键进行添加操作!");
    }
}
/*售前客服弹窗*/
function showxiaon() {
    NTKF_PARAM =
    {
        siteid: "kf_9883",
        settingid: "kf_9883_1402631963601" 
    }
    dr('consult');
    $('.dr_blackwall,.drKf_tc').hide();
    NTKF.im_openInPageChat("kf_9883_1402631963601");
}
/*售后客服弹窗*/
function showxiaonOther() {
    NTKF_PARAM =
    {
        siteid: "kf_9883",
        settingid: "kf_9883_1432524866880"
    }
    dr('consult');
    $('.dr_blackwall,.drKf_tc').hide();
    NTKF.im_openInPageChat("kf_9883_1432524866880");
}

//客服弹窗-关闭弹窗
function ag_tocclose_click() {
    ga('send', 'event', 'tocclose', 'click', 'talk', 0);
};


//客服弹窗-稍后再说
function ag_sszs_click() {
    ga('send', 'event', 'sszs', 'click', 'talk', 0);
};

//客服弹窗-现在咨询
function ag_chatnow_click() {
    ga('send', 'event', 'chatnow', 'click', 'talk', 0);
    dr('consult');
};

/*随机显示文字*/
function showtcword() {
    var wordlen = 6;
    var wordNum = Math.floor(Math.random() * wordlen);
    var wordshow = new Array(wordlen);
    wordshow[0] = "想了解更多钻石知识<br/>我们有专业在线客服给您解答";
    wordshow[1] = "定制合适的戒指手寸<br/>可以联系客服协助您进行估算";
    wordshow[2] = "挑选满意的戒指款式<br/>在线客服可以给您提供建议";
    wordshow[3] = "购买过程遇到问题<br/>直接联系在线客服解决";
    wordshow[4] = "想了解钻戒定制流程<br/>在线客服可以给您介绍说明";
    wordshow[5] = "欢迎光临Darry Ring<br/>有问题客服都可以帮您解答";
    $('.droline_kfword p').html(wordshow[wordNum]);
}
/*关闭客服文字弹窗*/
function hidetcword() {
    $('.droline_kfword').animate({ left: '0', opacity: 0 }, 500);
}
function GetCookie(cookieName) {
    var cookieValue = document.cookie;
    var cookieStartAt = cookieValue.indexOf("" + cookieName + "=");
    if (cookieStartAt == -1) {
        cookieStartAt = cookieValue.indexOf(cookieName + "=");
    }
    if (cookieStartAt == -1) {
        cookieValue = null;
    }
    else {
        cookieStartAt = cookieValue.indexOf("=", cookieStartAt) + 1;
        cookieEndAt = cookieValue.indexOf(";", cookieStartAt);
        if (cookieEndAt == -1) {
            cookieEndAt = cookieValue.length;
        }
        cookieValue = unescape(cookieValue.substring(cookieStartAt, cookieEndAt));//解码latin-1  
    }
    return cookieValue;
}
function SetCookie(name, value)
    //设定Cookie值
{
    var expdate = new Date();
    var expireDays = 30;
    expdate.setTime(expdate.getTime() + expireDays * 24 * 3600 * 1000);
    var argv = SetCookie.arguments;
    var argc = SetCookie.arguments.length;
    var expires = (argc > 2) ? argv[2] : null;
    var path = (argc > 3) ? argv[3] : null;
    var domain = (argc > 4) ? argv[4] : null;
    var secure = (argc > 5) ? argv[5] : false;

    document.cookie = name + "=" + escape(value) + (";  expires=" + expdate.toGMTString())
    + ((path == null) ? "" : (";  path=" + path)) + ((domain == null) ? "" : (";  domain=" + domain))
    + ((secure == true) ? ";  secure" : "");
}