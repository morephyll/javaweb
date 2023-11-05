document.write('<iframe name="t_frame" style="display:none"></iframe>');
function user_login_state(){
	$.ajax({
				type:"post",
				url:"/inc/User_Login.asp",
				data:"cmd=chklogin&time="+Date(),
				success:function(data){
						if(data!="[nologin]")
						{
							$("#Login_Box_Word").html("<b>欢迎，"+data+"</b>  <span style='padding-left:15px;' class='loginsp'><a href='/m/'>进入会员中心</a></span> <span style='padding-left:10px;'class='regsp'><a href='javascript:void(0)' onclick='logout()'>退出</a></span>");
						}
					}
			});	
}
user_login_state();

function logout()
{
	$.ajax({
				type:"post",
				url:"/inc/User_Login.asp",
				async:false,
				data:"cmd=toplogout&time="+Date(),
				success:function(data){
						if(data=="ok")
						{
							window.location.reload(true);
						}
					}
			});				
}
function fixImg(selector) {
    var w = $(selector).width();
	var imgs = $(selector).find("img");
    for(var i = 0; i < imgs.length; i++) {
        var img = imgs[i];
        //$(img).css("max-width", "100%");
		$(img).removeAttr("style");
		var img_w = $(img).width();
		var img_h = $(img).height();
		if(img_w>w){
			var height = (w*img_h)/img_w;
			$(img).css({"width":w+'px',"height":height+'px'});
		} 
        //$(img).wrap(function(){return "<a target='_blank' href="+$(this).attr("src")+"></a>";});
    }
}
document.write('<script src="/inc/qqonline.asp"></script>');
//document.write('<div style="display:none">');
//var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1254014948'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s11.cnzz.com/z_stat.php%3Fid%3D1254014948' type='text/javascript'%3E%3C/script%3E"));document.write('</div>');
