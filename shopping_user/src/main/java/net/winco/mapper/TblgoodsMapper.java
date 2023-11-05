package net.winco.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import net.winco.bean.Tblgoods;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
* @author 回忆
* @description 针对表【tblgoods】的数据库操作Mapper
* @createDate 2023-06-29 11:10:30
* @Entity net.winco.bean.Tblgoods
*/
@Mapper
public interface TblgoodsMapper extends BaseMapper<Tblgoods> {
    @Select("select distinct goodsBrand from tblgoods where goodsBrand !=''")
    List<Tblgoods> getGoodsBrandList();
}




