package net.winco.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import net.winco.Utils.Result;
import net.winco.bean.Tblmanager;
import net.winco.service.TblmanagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/manager")
public class ManagerController {
    @Autowired
    private TblmanagerService tblmanagerService;
    @GetMapping("/list")
    public Result<Tblmanager> list(Tblmanager tblmanager,Integer currentPage, Integer pageSize)
    {
        LambdaQueryWrapper<Tblmanager>lqwManager=new LambdaQueryWrapper<>();
        lqwManager.orderByAsc(Tblmanager::getManagerId);
        lqwManager.like(tblmanager.getRealName()!=null && tblmanager.getRealName()!="",Tblmanager::getRealName,tblmanager.getRealName());
        List<Tblmanager> list = tblmanagerService.list(lqwManager);
        Result<Tblmanager> result = new Result<>();
        result.setRecords(list);
        return result;
    }

    @GetMapping("/selOne")
    public Result<Tblmanager>selOne(Tblmanager tblmanager){
        Tblmanager byId = tblmanagerService.getById(tblmanager.getManagerId());
        Result<Tblmanager> result = new Result<>();
        result.setRecord(byId);
        return result;
    }


    @GetMapping("/del")
    public Result<Object>del(Tblmanager tblmanager){
        boolean b = tblmanagerService.removeById(tblmanager.getManagerId());
        Result<Object> result = new Result<>();
        result.setCode(b?1:0);
        return result;
    }

    @PostMapping("/login")
    public Result<Object> login(Tblmanager tblmanager, HttpServletRequest req){
        LambdaQueryWrapper<Tblmanager>lqwMa=new LambdaQueryWrapper<>();
        lqwMa.eq(Tblmanager::getManagerAcc,tblmanager.getManagerAcc());
        lqwMa.eq(Tblmanager::getManagerPwd,tblmanager.getManagerPwd());
        Tblmanager one = tblmanagerService.getOne(lqwMa);
        Result<Object> result = new Result<>();
        if(one!=null){
            result.setCode(20041);
            one.setManagerPwd(null);
            req.getSession().setAttribute("user",one);
        }
        else result.setCode(20000);
        return result;
    }

    @PostMapping("/add")
    public Result<Object> add(Tblmanager tblmanager){
        boolean save = tblmanagerService.save(tblmanager);
        Result<Object> result = new Result<>();
        if (save)result.setCode(1);
        else result.setCode(0);
        return result;
    }

    @PostMapping("/upd")
    public Result<Object> upd(Tblmanager tblmanager){
        boolean update = tblmanagerService.updateById(tblmanager);
        Result<Object> result = new Result<>();
        if (update)result.setCode(1);
        else result.setCode(0);
        return result;
    }


}
