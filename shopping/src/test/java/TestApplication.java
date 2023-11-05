import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import net.winco.Dto.TblgoodsDto;
import net.winco.Utils.Result;
import net.winco.bean.Tblgoods;
import net.winco.bean.Tbltype;
import net.winco.mapper.TblgoodsMapper;
import net.winco.service.SimpleService;
import net.winco.service.TblgoodsService;
import net.winco.service.TbltypeService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Base64;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath*:/applicationContext.xml"})
public class TestApplication {
    @Autowired
    private SimpleService simpleService;
    @Autowired
    private TblgoodsService tblgoodsService;
    @Autowired
    private TbltypeService tbltypeService;

    @Autowired
    private TblgoodsMapper tblgoodsMapper;

    @Test
    public void test1(){
        Integer currentPage=1,pageSize=5;
        Page<Tblgoods>page=new Page<>(currentPage,pageSize);
        Page<TblgoodsDto>page1=new Page<>(currentPage,pageSize);
        LambdaQueryWrapper<Tblgoods> lqw=new LambdaQueryWrapper<>();
        lqw.orderByAsc(Tblgoods::getCreateDate);
        tblgoodsService.page(page,lqw);
        List<Tblgoods> records = page.getRecords();

        LambdaQueryWrapper<Tbltype>lqwtype=new LambdaQueryWrapper<>();
        lqwtype.select(Tbltype::getGoodsTypeId,Tbltype::getTypeName);
        List<Tbltype> listtblType = tbltypeService.list(lqwtype);
        Map<Long, String> goodsTypeNameList = listtblType.stream().collect(Collectors.toMap(Tbltype::getGoodsTypeId, Tbltype::getTypeName));

        List<TblgoodsDto> TblgoodsDtoList = records.stream().map((item) -> {
            TblgoodsDto tblgoodsDto = new TblgoodsDto();
            BeanUtils.copyProperties(item, tblgoodsDto);
            tblgoodsDto.setTypeName(goodsTypeNameList.get(tblgoodsDto.getGoodsTypeId()));
            return tblgoodsDto;
        }).collect(Collectors.toList());
        System.out.println(TblgoodsDtoList);
    }
    @Test
    public void test2(){
        Tblgoods tblgoods = new Tblgoods();
        tblgoods.setGoodsId(54);
        tblgoods.setGoodsName("超级测试666");
        tblgoodsService.updateById(tblgoods);
    }
}
