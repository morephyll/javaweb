package net.winco.service;

import com.baomidou.mybatisplus.extension.service.IService;
import net.winco.bean.Tblgoods;
import org.springframework.stereotype.Service;

import java.util.List;

/**
* @author 回忆
* @description 针对表【tblgoods】的数据库操作Service
* @createDate 2023-06-29 11:10:30
*/
@Service
public interface TblgoodsService extends IService<Tblgoods> {
    List<Tblgoods> getGoodsBrandList();
}
