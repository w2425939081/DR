/*
 * 头部入口模块
 * 2015-06-27 14:00
 * */
define(function (require, exports, module) {
    /*通过 require 引入依赖*/
    require('drjs/lib/jquery/jquery.js');
    var drToggle = require('drjs/modules/drtoggle.js');
    var Tabs = require('drjs/modules/tabs.js');
    var Banner_nav = require('drjs/modules/banner.js');
    var twoTabs = require('/drjs/modules/twoTabs.js');

    $(function () {
        //语言切换显示隐藏
        $('#dr-country').hover(function () {
            $('#dr-english').show();
            $('#dr-hongkong').show();
        }, function () {
            $('#dr-english').hide();
            $('#dr-hongkong').hide();
        })
        //首页子菜单显示隐藏
        var drindex = new drToggle().init({
            id: '#DrNav',
            action: '#DRsubNav'
        });
        //求婚钻戒子菜单显示隐藏
        var drqhzj = new drToggle().init({
            id: '#qhzjNav',
            action: '#qhzjsubNav'
        });
        //真爱时刻子菜单显示隐藏
        var drzasks = new drToggle().init({
            id: '#zaskNav',
            action: '#zasksubNav'
        });
        //实体店子菜单显示隐藏
        var drzasks = new drToggle().init({
            id: '#shopNav',
            action: '#ShopsubNav'
        });
        //品牌文化子菜单显示隐藏
        var drzasks = new drToggle().init({
            id: '#ppwhNav',
            action: '#ppwhsubNav'
        });
        //DR社区子菜单显示隐藏
        var drzasks = new drToggle().init({
            id: '#DRsqNav',
            action: '#DRsqsubNav'
        });
        //登陆之后操作项显示隐藏
        var drlogin = new drToggle().init({
            id: '#loginInInfo',
            action: '#loginInaAtion'
        });
        //导航栏实体店轮播
        var nav_slider = new Banner_nav().init({
            id: '#drnav_slider',
            time: 2500
        });
        //店铺切换效果
        var shopTabsNav = new twoTabs().init({
            id: '#drstore-tab-nav',
            firstWidth: 26,
            otherWidth: 58,
            timer: 300
        });
        //所在城市店铺
        $('.dr_member-ip').off('mouseenter').on('mouseenter', function () {
            $(this).addClass('dr_member-iphover');
        }).off('mouseleave').on('mouseleave', function () {
            $(this).removeClass('dr_member-iphover');
        });
        $('.dr_member-ipxl a').off('click').on('click', function () {
            $('.dr_member-ipxl a').removeClass('dr_member-ipxlclick');
            $(this).addClass('dr_member-ipxlclick');
            $('.dr_member-ipspecial').html($(this).html());
        });

        //真爱验证提示
        var drloveVerify = new drToggle().init({
            id: '.drmember_yz',
            action: '.index_yz-word'
        });
        $('.drmember_yzborderul span').click(function () {
            $('.drmember_yzborderul ul').show();
            $('.drmember_yzborderul').addClass('drmember_yzborderclick');
            $(this).hide();
            return false;
        });
        $('body').click(function () {
            $('.drmember_yzborderul ul').hide();
            $('.drmember_yzborderul span').show();
            $('.drmember_yzborderul').removeClass('drmember_yzborderclick');
        });
        $('.drmember_yzborderul ul li').click(function () {
            $('.drmember_yzborderul').find('span').html($(this).html());
            $('.drmember_yzborderul ul').hide();
            $(".tohide").val($(this).html());
            $('.drmember_yzborderul span').show();
            $('.drmember_yzborderul').removeClass('drmember_yzborderclick');
        });
        /*点击简繁切换*/
        $('.drmember_dl1').click(function () {
            $('#txtIDCardw').attr('placeholder', '请输入身份证号验证真爱承诺');
        });
        $('.drmember_dl2').click(function () {
            $('#txtIDCardw').attr('placeholder', '請輸入護照編號驗證真愛承諾');
        });
        $('.drmember_dl3').click(function () {
            $('#txtIDCardw').attr('placeholder', '請輸入港澳台身份證號碼驗證');
        });
        $('.drmember_dl4').click(function () {
            $('#txtIDCardw').attr('placeholder', '请输入国家证件号码验证真爱承诺');
        });
        $('.drmember_yz').hover(function () {
            if ($('#textIDCard').val() == '') {
                $('#dr_sfwrong').removeClass("drmember_yz-wrong").addClass('index_yz-word');
                $("#dr_sfwrong").html("<p>Darry Ring严格规定男士凭身份证一生仅能定制一枚，象征男人一生真爱的最高承诺。输入身份证号码即可查询购买记录。</p>");
            }
            $(this).css('z-index', 7);
        }, function () {
            if ($('#textIDCard').val() == '') {
                $('#dr_sfwrong').removeClass("drmember_yz-wrong").addClass('index_yz-word');
                $("#dr_sfwrong").html("<p>Darry Ring严格规定男士凭身份证一生仅能定制一枚，象征男人一生真爱的最高承诺。输入身份证号码即可查询购买记录。</p>");
            }
            $(this).css('z-index', 0);
        })
        //导航产品图片轮换
        $('.dr_navTabs').each(function () {
            new Tabs().init({
                tabsTops: $(this).find('.dr_navsuvleft-same a'),
                tabsMains: $(this).find('.dr_navsuvleft-ring a'),
                event: 'mouseenter'
            });
            new Tabs().init({
                tabsTops: $(this).find('.dr_navsuvright-same a'),
                tabsMains: $(this).find('.dr_navsuvright-ring a'),
                event: 'mouseenter'
            });
        });
        //点击去掉文字输入提示
        $('#txtIDCardw').focus(function () {
            $(this).attr('placeholder', '');
            $('.drmember_yz-word').hide();
        }).blur(function () {
            if ($('.tohide').val() == '海外地区') {
                $(this).attr('placeholder', '請輸入護照編號驗證真愛承諾');
            }
            else if ($('.tohide').val() == '港澳台') {
                $(this).attr('placeholder', '請輸入港澳台身份證號碼驗證');
            }
            else if ($('.tohide').val() == '其他') {
                $(this).attr('placeholder', '请输入国家证件号码验证真爱承诺');
            }
            else {
                $(this).attr('placeholder', '请输入身份证号验证真爱承诺');
            }
        });
        //头部新增APP下载通道
        $('.drapp_dowonload').hover(function () {
            $(this).addClass('drapphide_show');
        }, function () {
            $(this).removeClass('drapphide_show');
        });
        //头部后台程序js代码处
        $('.drmember_yz').hover(function () {
            setTimeout(Tsnews, 5000);
        });

        //验证为空时
        $("#btnnSeach").click(function () {
            var Area = "";
            var address = $("#span_currArea").html();
            var txtCard = $("#txtIDCardw").val();
            txtCard = chkHalf(txtCard);

            var reg = false;

            $("#dr_sfwrong").removeClass("index_yz-word").addClass("drmember_yz-wrong")

            if (address == "中国大陆") {
                Area = 0;
            } else if (address == "海外地区") {
                Area = 1;
            } else if (address == "港澳台") {
                Area = 2;
            } else if (address == "其他") {
                Area = 3;
            }

            if (Area == 0) {
                $("#dr_sfwrong").html("<p>身份证有误，请重新输入。</p>");
                reg = IdentityCodeValid(txtCard);
            }
            else if (Area == 1) {
                $("#dr_sfwrong").html("<p>護照編號輸入有誤，請重新輸入。</p>");
                reg = checknumber(txtCard);
            } else if (Area == 2) {
                $("#dr_sfwrong").html("<p>您的身份證號碼輸入有誤，請重新輸入。</p>");
                reg = validateGAT(txtCard);
            } else if (Area == 3) {
                $("#dr_sfwrong").html("<p>您的证件号码输入有误，请重新输入。</p>");
                reg = checkjgz(txtCard);
            }

            if (!reg) {
                $("#dr_sfwrong").show();
                setTimeout(indexwronghide, 3000);
                return false;
            }
            else {
                $("#dr_sfwrong").hide();
            }

            $.get("/API/DarryringYzAPI.ashx", { action: 'yz', card: txtCard, name: "" }, function (data) {
                var json = $.parseJSON(data);

                if (json.Status == "0") {
                    window.location.href = "/dryz/ng_" + json.Name + ".html";
                    return false;
                }
                if (json.Status == "1") {
                    window.location.href = "/dryz/cg_" + json.Name + "_" + json.GName + "_" + json.Dates + "_" + json.Id + ".html";
                    return false;
                }
                if (json.Status == "2") {
                    window.location.href = "/dr_ng2.aspx?name=" + json.Name;
                    return false;
                }
            });
        });

        //点击关闭弹窗
        $('.Popup_close,.goto_shop').off('click').on('click', function () {
            $('.dr_sametc,.dr_blackwall').hide();
        });
    });
});


function verfifyContactName(str) {
    var nameStr = str;
    if (trim(nameStr) == null || trim(nameStr) == "") {
        //alert("联系人姓名不能为空");
        return false;
    } else {
        var reg = /^[\u4e00-\u9fa5a-z][\u4e00-\u9fa5a-z_]*$/i;
        var name_Flag = reg.test(nameStr);
        if (name_Flag) {
            return true;
        } else {
            //alert("联系人姓名只能为中文、英文、数字");
            return false;
        }
    }
}

function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
//验证大陆身份证
function IdentityCodeValid(code) {
    var city = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江 ", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北 ", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏 ", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外 " };
    var tip = "";
    var pass = true;
    var isIDCard = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/; //15位身份证
    if (code.length == 15) {
        if (isIDCard.test(code)) {
            pass = true;
        }
    }
    else {
        if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[0-2])(0[1-9]|[0-2]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
            tip = "身份证号格式错误";
            pass = false;
        } else if (!city[code.substr(0, 2)]) {
            tip = "地址编码错误";
            //tip = "身份证号格式错误";
            pass = false;
        }
        else {
            //18位身份证需要验证最后一位校验位
            if (code.length == 18) {
                code = code.split('');

                //∑(ai×Wi)(mod 11)
                //加权因子
                var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
                //校验位
                var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
                var sum = 0;
                var ai = 0;
                var wi = 0;
                for (var i = 0; i < 17; i++) {
                    ai = code[i];
                    wi = factor[i];
                    sum += ai * wi;
                }
                var last = parity[sum % 11];
                if (parity[sum % 11] != code[17]) {
                    tip = "校验位错误";
                    //tip = "身份证号格式错误";
                    pass = false;
                }
            }
            else {
                pass = false;
            }
        }
    }
    return pass;
}

//验证港澳台身份证号码
function validateGAT(card) {

    var expression = /^(([1|5|7][0-9]{6}\([0-9a-zAZ-Z]\))|([a-zA-Z]\d{6}\([0-9a-zAZ-Z]\))|([a-zA-Z]\d{9}))$/;
    var obj = new RegExp(expression);
    if (obj.test(card)) {
        return true;
    } else {
        return false;
    }
}
//验证护照是否正确
function checknumber(number) {
    var str = number;
    //在JavaScript中，正则表达式只能使用"/"开头和结束，不能使用双引号
    var Expression = /^([Pp]\d{7}|[Gg]\d{8}|[Ee]\d{8}|\d{9}|[Ss]\d{7,8}|[Dd]\d+|1[4,5]\d{7}|[a-zA-Z]{2}\d{6,7}|[a-zA-Z]{1}\d{7,8})$/;
    var objExp = new RegExp(Expression);
    if (objExp.test(str)) {
        return true;
    } else {
        return false;
    }
};
//验证军官证是否正确
function checkjgz(card) {
    var expression = /^[a-zA-Z0-9]{7,21}$/;
    var obj = new RegExp(expression);
    if (obj.test(card)) {
        return true;
    } else {
        return false;
    }
}

//判断全角字符，返回新字符串
function chkHalf(str) {
    for (var i = 0; i < str.length; i++) {
        var strCode = str.charCodeAt(i);
        if ((strCode > 65248) && strCode < 65375 || (strCode == 12288)) {
            str = str.replace(str[i], String.fromCharCode(strCode - 65248));
        } else {
            str = str.replace(str[i], String.fromCharCode(strCode));
        }
    }
    return str;
}
function indexwronghide() {
    $('#dr_sfwrong').hide();
    $("#dr_sfwrong").html("<p>Darry Ring严格规定男士凭证件一生仅能定制一枚，象征男人一生真爱的最高承诺。输入证件号码即可查询购买记录。</p>");
    $("#dr_sfwrong").addClass("index_yz-word");
    $("#dr_sfwrong").removeClass("drmember_yz-wrong");

}
//提示消失
function Tsnews() {
    $('.drmember_yz-word').hide();
}
