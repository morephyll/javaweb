package net.winco.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import net.winco.bean.Tblgoods;
import net.winco.service.TblgoodsService;
import net.winco.mapper.TblgoodsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
* @author 回忆
* @description 针对表【tblgoods】的数据库操作Service实现
* @createDate 2023-06-29 11:10:30
*/
@Service
public class TblgoodsServiceImpl extends ServiceImpl<TblgoodsMapper, Tblgoods>
    implements TblgoodsService{
    @Autowired
    private TblgoodsMapper tblgoodsMapper;
    @Override
    public List<Tblgoods> getGoodsBrandList() {
        return tblgoodsMapper.getGoodsBrandList();
    }
}




