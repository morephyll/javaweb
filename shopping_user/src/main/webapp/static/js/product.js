
 function chkshopnum(op) {
	
		var index = arguments.length>1?arguments[1]:'';
		var eshopnum = "#shopnum"+index;
		var epronum = "#pronum"+index;
		var shopnum = parseInt($(eshopnum).val());
		var pronum = parseInt($(epronum).val());
		var proallnum = 0;
		if (op == "add") { proallnum = shopnum + 1; }
		else { proallnum = shopnum - 1; }

		if (proallnum < 1) { $(eshopnum).val(1); }
		else if (proallnum > pronum) { $(eshopnum).val(pronum); }
		else { $(eshopnum).val(proallnum); }
	}

if($('input[name="shopnum"]').length==1){

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
}
