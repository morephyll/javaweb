package net.winco.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import net.winco.bean.Result;
import net.winco.bean.Tblshoppingcart;
import net.winco.constant.Code;
import net.winco.service.TblshoppingcartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/shoppingcart")
public class ShoppingCartController {
    @Autowired
    private TblshoppingcartService tblshoppingcartService;

    @GetMapping("/findShoppingcartGoods")
    public Result findShoppingcartGoods(Tblshoppingcart tblshoppingcart){
        LambdaQueryWrapper<Tblshoppingcart>lqwSC=new LambdaQueryWrapper<>();
        lqwSC.eq(Tblshoppingcart::getGoodsId,tblshoppingcart.getGoodsId());
        lqwSC.eq(Tblshoppingcart::getUserId,tblshoppingcart.getUserId());
        Tblshoppingcart one = tblshoppingcartService.getOne(lqwSC);
        return new Result(Code.FIND_OK,one,"OK");
    }

    @GetMapping("/add")
    public Result add(Tblshoppingcart tblshoppingcart){
        boolean save = tblshoppingcartService.save(tblshoppingcart);
        int ok=1;
        if (!save)ok=0;
        return new Result(Code.FIND_OK,ok,"OK");
    }

    @GetMapping("/updateShoppingcartGoodsNum")
    public Result updateShoppingcartGoodsNum(Tblshoppingcart tblshoppingcart){
        LambdaUpdateWrapper<Tblshoppingcart> lqwSC=new LambdaUpdateWrapper<>();
        lqwSC.eq(Tblshoppingcart::getUserId,tblshoppingcart.getUserId());
        lqwSC.eq(Tblshoppingcart::getGoodsId,tblshoppingcart.getGoodsId());
        lqwSC.set(Tblshoppingcart::getGoodsNum,tblshoppingcart.getGoodsNum());
        boolean update = tblshoppingcartService.update(lqwSC);
        int ok=1;
        if (!update)ok=0;
        return new Result(Code.FIND_OK,ok,"OK");
    }
}
