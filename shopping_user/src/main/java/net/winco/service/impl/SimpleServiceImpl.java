package net.winco.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import net.winco.bean.Simple;
import net.winco.mapper.SimpleMapper;
import net.winco.service.SimpleService;
import org.springframework.stereotype.Service;

/**
* @author 回忆
* @description 针对表【simple】的数据库操作Service实现
* @createDate 2023-06-29 11:10:30
*/
@Service
public class SimpleServiceImpl extends ServiceImpl<SimpleMapper, Simple>
    implements SimpleService{

}




