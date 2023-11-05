package net.winco.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import net.winco.Utils.Result;
import net.winco.bean.Tbltype;
import net.winco.service.TbltypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/type")
public class TypeController {
    @Autowired
    private TbltypeService tbltypeService;
    @GetMapping("/list")
    public Result<Tbltype> getTypeList(Tbltype tbltype){
        LambdaQueryWrapper<Tbltype>lqwtype=new LambdaQueryWrapper<>();
        lqwtype.orderByAsc(Tbltype::getGoodsTypeId);
        lqwtype.eq(tbltype!=null,Tbltype::getParentId,tbltype.getParentId());
        List<Tbltype> list = tbltypeService.list(lqwtype);
        Result<Tbltype> result = new Result<>();
        result.setRecords(list);
        return result;
    }
}
