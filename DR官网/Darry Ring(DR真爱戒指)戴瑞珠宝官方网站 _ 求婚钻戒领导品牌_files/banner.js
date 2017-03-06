/*
 * banner�ֲ����
 * 2015-06-26 14:00
 * params:cfg
 * */
define(function (require, exports, module) {
    /*ͨ�� require ��������*/
    require('jquery');

    function Banner() {
        this.cfg = {
            id: '',
            btnListId: '',
            btnListClass: 'select',
            thisShow: 1,
            time: 3000,
            callback: null,
            timer: null,
            ban: null,
            banList: null,
            btnList: null,
            nextBtn: null,
            prevBtn: null
        };
        var $this = this;
        this.onStart = function () {
            $this.cfg.banList.stop(true, true).fadeOut(800).eq($this.cfg.thisShow).stop(true, true).fadeIn(800);
            if ($this.cfg.btnListId) {
                $this.cfg.btnList.removeClass($this.cfg.btnListClass).eq($this.cfg.thisShow).addClass($this.cfg.btnListClass);
            }
            if ($this.cfg.thisShow >= $this.cfg.banList.length - 1) {
                $this.cfg.thisShow = 0;
            } else if ($this.cfg.thisShow < -1) {
                $this.cfg.thisShow = $this.cfg.banList.length - 1;
            } else {
                $this.cfg.thisShow = $this.cfg.thisShow + 1;
            }
        },
		this.stop = function () {
		    if ($this.cfg.timer) {
		        clearInterval($this.cfg.timer);
		    }
		},
		this.start = function () {
		    $this.cfg.timer = setInterval($this.onStart, $this.cfg.time);
		},
		this.goto = function (index) {
		    $this.stop();
		    $this.onStart();
		    $this.start();
		}
    }

    Banner.prototype = {
        init: function (cfg) {
            var $this = this;
            $this.cfg = $.extend($this.cfg, cfg);
            $this.cfg.ban = $($this.cfg.id);
            $this.cfg.banList = $this.cfg.ban.find('li');
            $this.cfg.banList.hide().eq(0).show();
            $this.cfg.btnList = $($this.cfg.btnListId).find('li');
            $this.cfg.thisShow = 1;
            $this.stop();
            $this.start();
            //һ���������ɷ�ҳ��ť��ֻ��һ��ʱֹͣ�л�
            var bansize = $this.cfg.banList.length;
            if (bansize > 1) {
                $this.cfg.btnList.removeClass($this.cfg.btnListClass).eq(0).addClass($this.cfg.btnListClass);
                $this.cfg.btnList.each(function (index) {
                    $(this).off('click').on('click', function (e) {
                        $this.cfg.thisShow = index;
                        $this.cfg.btnList.removeClass($this.cfg.btnListClass).eq(index).addClass($this.cfg.btnListClass);
                        $this.goto($this.cfg.thisShow);
                        e.stopPropagation();
                    });
                });
            } else {
                $this.stop();
            }

            if ($this.cfg.nextBtn) {
                $($this.cfg.nextBtn).off('click').on('click', function (e) {
                    $this.goto($this.cfg.thisShow);
                    e.stopPropagation();
                });
            }
            if ($this.cfg.prevBtn) {
                $($this.cfg.prevBtn).off('click').on('click', function (e) {
                    $this.cfg.thisShow = $this.cfg.thisShow - 2;
                    $this.goto($this.cfg.thisShow);
                    e.stopPropagation();
                });
            }
            return this;
        }
    }
    module.exports = Banner;
});