package net.winco.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import net.winco.bean.Result;
import net.winco.bean.Tblfavorite;
import net.winco.bean.Tblgoods;
import net.winco.constant.Code;
import net.winco.service.TblfavoriteService;
import net.winco.service.TblgoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/favorite")
public class FavoriteController {
    @Autowired
    private TblfavoriteService tblfavoriteService;
    @Autowired
    private TblgoodsService tblgoodsService;
    @GetMapping("/favoriteGoodsList")
    public Result getFavoriteGoodsList(Integer userId){
        // System.out.println("获取===id===="+userId);
        LambdaQueryWrapper<Tblfavorite>lqwFavorite=new LambdaQueryWrapper<>();
        lqwFavorite.eq(Tblfavorite::getUserId,userId);
        List<Tblfavorite> list = tblfavoriteService.list(lqwFavorite);
        List<Long> goodsList = list.stream().map((item) -> {
            return item.getGoodsId();
        }).collect(Collectors.toList());

        List<Tblgoods> tblgoods = tblgoodsService.listByIds(goodsList);
        return new Result(Code.FIND_OK,tblgoods,"ok");
    }

    @GetMapping("/addFavorite")
    public Result addFavorite(Tblfavorite tblfavorite){

        boolean save = tblfavoriteService.save(tblfavorite);
        Integer ok=1;
        if (!save)ok=0;
        return new Result(Code.FIND_OK,ok,"ok");

    }

    @GetMapping("/selOne")
    public Result selOne(Tblfavorite tblfavorite){
        LambdaQueryWrapper<Tblfavorite>lqwF=new LambdaQueryWrapper<>();
        lqwF.eq(Tblfavorite::getUserId,tblfavorite.getUserId());
        lqwF.eq(Tblfavorite::getGoodsId,tblfavorite.getGoodsId());
        Tblfavorite one = tblfavoriteService.getOne(lqwF);
        return new Result(Code.FIND_OK,one,"ok");
    }

    @GetMapping("/delFavorite")
    public Result delOne(Tblfavorite tblfavorite){
        LambdaQueryWrapper<Tblfavorite>lqwF=new LambdaQueryWrapper<>();
        lqwF.eq(Tblfavorite::getUserId,tblfavorite.getUserId());
        lqwF.eq(Tblfavorite::getGoodsId,tblfavorite.getGoodsId());
        boolean remove = tblfavoriteService.remove(lqwF);
        Integer ok=1;
        if (!remove)ok=0;
        return new Result(Code.FIND_OK,ok,"ok");
    }

    @PostMapping("/delFavorites")
    public Result delArr(Integer userId,@RequestParam(value = "goodsIdArr[]") Integer[] goodsIdArr){
        LambdaQueryWrapper<Tblfavorite>lqwF=new LambdaQueryWrapper<>();
        lqwF.eq(Tblfavorite::getUserId,userId);
        lqwF.in(Tblfavorite::getGoodsId,goodsIdArr);
        boolean remove = tblfavoriteService.remove(lqwF);
        Integer ok=goodsIdArr.length;
        if (!remove)ok=0;
        return new Result(Code.FIND_OK,ok,"ok");
        // System.out.println("userid===="+userId);
        // System.out.println("获取到的arr==="+goodsIdArr);
        // return null;
    }
}
