package net.winco.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import net.winco.bean.Simple;
import org.apache.ibatis.annotations.Mapper;

/**
* @author 回忆
* @description 针对表【simple】的数据库操作Mapper
* @createDate 2023-06-29 11:10:30
* @Entity net.winco.bean.Simple
*/
@Mapper
public interface SimpleMapper extends BaseMapper<Simple> {

}




