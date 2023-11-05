package net.winco.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.api.ApiController;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import net.winco.bean.Simple;
import net.winco.service.SimpleService;
import org.springframework.aop.framework.autoproxy.AbstractAutoProxyCreator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/sample")
public class SimpleController {
    @Autowired
    private SimpleService simpleService;
    @GetMapping("/list")
    public Page<Simple> list(Integer currentPage, Integer pageSize){
        // System.out.println("&currentPage="+currentPage+"&pageSize="+pageSize);
        Page<Simple>page=new Page<>(currentPage,pageSize);
        LambdaQueryWrapper<Simple>lqw=new LambdaQueryWrapper<>();
        simpleService.page(page,lqw);
        return page;
    }
}

