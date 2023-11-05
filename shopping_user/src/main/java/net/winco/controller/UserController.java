package net.winco.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import net.winco.bean.Result;
import net.winco.bean.Tblmanager;
import net.winco.bean.Tbluser;
import net.winco.constant.Code;
import net.winco.service.TblmanagerService;
import net.winco.service.TbluserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private TbluserService tbluserService;
    @PostMapping("/login")
    public Result login(Tbluser tbluser, String inputCode, HttpServletRequest req){
        String code = (String) req.getSession().getAttribute("code");
        //验证码错误
        if(!code.equalsIgnoreCase(inputCode)){
            return new Result(Code.FIND_ERR,null,"-2");
        }
        //用户名密码正确
        if(tbluser.getUserAcc()!=null && tbluser.getUserPwd()!=null){
            LambdaQueryWrapper<Tbluser>lqwUser=new LambdaQueryWrapper<>();
            lqwUser.eq(Tbluser::getUserAcc,tbluser.getUserAcc());
            lqwUser.eq(Tbluser::getUserPwd,tbluser.getUserPwd());
            Tbluser one = tbluserService.getOne(lqwUser);
            if (one!=null){
                req.getSession().setAttribute("user",one);
                return new Result(Code.FIND_OK,one,"1");
            }
        }
        return new Result(Code.FIND_ERR,null,"-1");
    }
}
