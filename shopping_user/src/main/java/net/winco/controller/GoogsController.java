package net.winco.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import net.winco.bean.Result;
import net.winco.bean.Tblgoods;
import net.winco.constant.Code;
import net.winco.service.TblgoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/goods")
public class GoogsController {
    @Autowired
    private TblgoodsService tblgoodsService;
    @GetMapping("/list")
    public Result getListByTypeId(Integer goodsTypeId,Integer currentPage,Integer pageSize){
        // System.out.println("pageSize=="+pageSize+" currentPage== "+currentPage+"pageSize=="+pageSize);
        Page<Tblgoods>goodsPage=new Page<>(currentPage,pageSize);
        LambdaQueryWrapper<Tblgoods>lqwGoods=new LambdaQueryWrapper<>();
        lqwGoods.eq(Tblgoods::getGoodsTypeId,goodsTypeId);
        tblgoodsService.page(goodsPage,lqwGoods);
        return new Result(Code.FIND_OK,goodsPage.getRecords(),"");
    }
    @GetMapping("/detail")
    public Result getGoodsDetail(Integer goodsId){
        Tblgoods byId = tblgoodsService.getById(goodsId);
        return new Result(Code.FIND_OK,byId,"");
    }
}
