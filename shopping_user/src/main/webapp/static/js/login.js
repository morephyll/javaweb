$(function () {
    $("#ImgCheckCode").click(function () {
        $(this).prop("src","code?ran="+Math.random())
    })

    $("#loginBtn").click(function () {
        let acc = $("#login_username").val()
        let pwd = $("#login_password").val()
        let code = $("#VerifyCode").val()
        if(acc==""){
            layer.msg("账号不能为空！！！",{icon:7,time:1000})
        }else if(pwd==''){
            layer.msg("密码不能为空！！！",{icon:7,time:1000})
        }else if(code==''){
            layer.msg("验证码不能为空！！！",{icon:7,time:1000})
        }else{
            $.ajax({
                url:"user/login",
                data:$("#formpost").serialize(),
                type:"post",
                dataType:"json",
                success:function (result) {
                    if(result.msg=="1"){
                        sessionStorage.setItem("user",JSON.stringify(result.data))
                        layer.msg("登入成功",{time:1500,icon:1},function () {
                            location.href="index.html"
                        })
                    }else {
                        if (result.msg == "-1") {
                            layer.msg("账号或密码错误！！！", {time: 1500, icon: 2})
                        } else {
                            layer.msg("验证码错误！！！", {time: 1500, icon: 2})
                        }
                        $("#ImgCheckCode").click();
                    }
                }
            })
        }

    })
})

