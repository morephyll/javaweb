import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import net.winco.bean.Tblfavorite;
import net.winco.bean.Tblgoods;
import net.winco.service.TblgoodsService;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

public class test {
    @Autowired
    private TblgoodsService tblgoodsService;
    @Test
    public void test(){
        List<Tblgoods> list = tblgoodsService.list();
    }
}
