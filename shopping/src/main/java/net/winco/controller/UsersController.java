package net.winco.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import net.winco.Dto.TblgoodsDto;
import net.winco.bean.Tblgoods;
import net.winco.bean.Tbltype;
import net.winco.bean.Tbluser;
import net.winco.service.TblgoodsService;
import net.winco.service.TbltypeService;
import net.winco.service.TbluserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/users")
public class UsersController {
    @Autowired
    private TbluserService tbluserService;
    @GetMapping("/list")
    public Page list(Tbluser tbluser, Integer currentPage, Integer pageSize){
        // System.out.println("&currentPage=="+currentPage+"&pageSize=="+pageSize);
        //获取基本商品分页
        Page<Tbluser>page=new Page<>(currentPage,pageSize);
        LambdaQueryWrapper<Tbluser> lqw=new LambdaQueryWrapper<>();
        lqw.orderByAsc(Tbluser::getRegisterDate);
        lqw.like(tbluser.getUserName().trim()!=null,Tbluser::getUserName,tbluser.getUserName());
        tbluserService.page(page,lqw);
        return page;
    }
}
