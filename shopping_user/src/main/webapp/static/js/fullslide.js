 function chkshopnum(op) {
            var shopnum = parseInt($("#shopnum").val());
            var pronum = parseInt($("#pronum").val());
            var proallnum = 0;
            if (op == "add") { proallnum = shopnum + 1; }
            else { proallnum = shopnum - 1; }

            if (proallnum < 1) { $("#shopnum").val(1); }
            else if (proallnum > pronum) { $("#shopnum").val(pronum); }
            else { $("#shopnum").val(proallnum); }
        }

 $(function () {
            $(".fullSlide").hover(function () {
                $(this).find(".prev,.next").stop(true, true).fadeTo("show", 1.5)
            },
                function () {
                    $(this).find(".prev,.next").fadeOut()
                });
            $(".fullSlide").slide({
                titCell: ".hdfullscreen ul",
                mainCell: ".bdfullscreen ul",
                effect: "fold",
                autoPlay: true,
                autoPage: true,
                trigger: "click",
                interTime: 2000,
                startFun: function (i) {
                    var curLi = jQuery(".fullSlide .bdfullscreen li").eq(i);
                    if (!!curLi.attr("_src")) {
                        curLi.css("background-image", curLi.attr("_src")).removeAttr("_src")
                    }
                }
            });
        });

		   var ii = 0;
        var speed = 1;
        var fangxiang = 1;
        var demo = document.getElementById('demo');
        var demo1 = document.getElementById('demo1');
        var demo2 = document.getElementById('demo2');
        demo2.innerHTML = demo1.innerHTML
        function andyzsy() {
            if (ii == 1) return
            for (i = 1; i <= speed; i++) {
                if (fangxiang == "2") {
                    demo.scrollLeft--
                    if (demo.scrollLeft == "0")
                        demo.scrollLeft = demo1.offsetWidth
                }
                else {
                    demo.scrollLeft++
                    if (demo.scrollLeft >= demo1.offsetWidth)
                        demo.scrollLeft = 0
                }
            }
        }
        function setspeed(x) {
            speed = x;
        }
        function setfangxiang(x) {
            fangxiang = x;
        }
        setInterval(andyzsy, 30)
