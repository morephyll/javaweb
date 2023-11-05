package net.winco.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import net.winco.Dto.TblgoodsDto;
import net.winco.Utils.ImageUtils;
import net.winco.Utils.Result;
import net.winco.bean.Tblgoods;
import net.winco.bean.Tbltype;
import net.winco.service.TblgoodsService;
import net.winco.service.TbltypeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/goods")
public class GoodsController {
    @Autowired
    private TblgoodsService tblgoodsService;
    @Autowired
    private TbltypeService tbltypeService;

    /**
     * 查询list列表
     *
     * @param goodsDto
     * @param currentPage
     * @param pageSize
     * @return
     */
    @GetMapping("/list")
    public Page list(TblgoodsDto goodsDto, Integer currentPage, Integer pageSize) {
        // System.out.println("&currentPage=="+currentPage+"&pageSize=="+pageSize);
        //获取基本商品分页
        Page<Tblgoods> page = new Page<>(currentPage, pageSize);
        LambdaQueryWrapper<Tblgoods> lqw = new LambdaQueryWrapper<>();
        lqw.orderByAsc(Tblgoods::getCreateDate);
        lqw.like(goodsDto.getGoodsName().trim() != null, Tblgoods::getGoodsName, goodsDto.getGoodsName());
        lqw.like(goodsDto.getGoodsBrand().trim() != null, Tblgoods::getGoodsBrand, goodsDto.getGoodsBrand());
        tblgoodsService.page(page, lqw);
        List<Tblgoods> records = page.getRecords();
        //获取所有商品类型名称的map
        LambdaQueryWrapper<Tbltype> lqwtype = new LambdaQueryWrapper<>();
        lqwtype.select(Tbltype::getGoodsTypeId, Tbltype::getTypeName);
        List<Tbltype> listtblType = tbltypeService.list(lqwtype);
        Map<Long, String> goodsTypeNameList = listtblType.stream().collect(Collectors.toMap(Tbltype::getGoodsTypeId, Tbltype::getTypeName));

        List<TblgoodsDto> TblgoodsDtoList = records.stream().map((item) -> {
            TblgoodsDto tblgoodsDto = new TblgoodsDto();
            BeanUtils.copyProperties(item, tblgoodsDto);
            tblgoodsDto.setTypeName(goodsTypeNameList.get(tblgoodsDto.getGoodsTypeId()));
            return tblgoodsDto;
        }).collect(Collectors.toList());

        Page<TblgoodsDto> page1 = new Page<>(currentPage, pageSize);
        BeanUtils.copyProperties(page, page1, "records");
        page1.setRecords(TblgoodsDtoList);
        return page1;
    }

    /**
     * 查询商品品牌
     *
     * @return
     */
    @GetMapping("/brandList")
    public Result<String> getBrandList() {

        Result<String> tblgoodsResult = new Result<>();
        List<Tblgoods> goodsBrandList = tblgoodsService.getGoodsBrandList();

        List<String> brandName = goodsBrandList.stream().map((item) -> {
            return item.getGoodsBrand();
        }).collect(Collectors.toList());

        tblgoodsResult.setRecords(brandName);
        return tblgoodsResult;
    }

    /**
     * 编辑商品回显
     *
     * @param tblgoods
     * @return
     */
    @GetMapping("/selOne")
    public Result<Tblgoods> getOneByGood(Tblgoods tblgoods) {
        LambdaQueryWrapper<Tblgoods> lqwgoods = new LambdaQueryWrapper<>();
        lqwgoods.eq(Tblgoods::getGoodsId, tblgoods.getGoodsId());
        Result<Tblgoods> result = new Result<>();
        result.setRecord(tblgoodsService.getOne(lqwgoods));
        return result;
    }

    /**
     * 增加数据
     *
     * @param tblgoods
     * @return
     */
    @PostMapping("/add")
    public Result add(MultipartFile mainImg,
                      MultipartFile detailImg0,
                      MultipartFile detailImg1,
                      MultipartFile detailImg2,
                      MultipartFile detailImg3,
                      Tblgoods tblgoods,
                      HttpServletRequest httpServletRequest) {

        String mainImage = ImageUtils.saveImage(mainImg, httpServletRequest);
        String image1 = ImageUtils.saveImage(detailImg0, httpServletRequest);
        String image2 = ImageUtils.saveImage(detailImg1, httpServletRequest);
        String image3 = ImageUtils.saveImage(detailImg2, httpServletRequest);
        String image4 = ImageUtils.saveImage(detailImg3, httpServletRequest);

        tblgoods.setMainImage(mainImage);
        tblgoods.setImage1(image1);
        tblgoods.setImage2(image2);
        tblgoods.setImage3(image3);
        tblgoods.setImage4(image4);

        if ("".equals(tblgoods.getDeadDate())) {
            tblgoods.setDeadDate(null);
        }
        boolean i = tblgoodsService.save(tblgoods);
        Result<Object> result = new Result<>();

        if (i) {
            result.setCode(1);
            return result;
        } else {
            result.setCode(0);
            return result;
        }
    }
    @Transactional
    @RequestMapping("/upd")
    public Result upd(MultipartFile mainImg,
                      MultipartFile detailImg0,
                      MultipartFile detailImg1,
                      MultipartFile detailImg2,
                      MultipartFile detailImg3,
                      Tblgoods tblgoods,
                      HttpServletRequest httpServletRequest) {
        String mainImage = ImageUtils.saveImage(mainImg, httpServletRequest);
        String image1 = ImageUtils.saveImage(detailImg0, httpServletRequest);
        String image2 = ImageUtils.saveImage(detailImg1, httpServletRequest);
        String image3 = ImageUtils.saveImage(detailImg2, httpServletRequest);
        String image4 = ImageUtils.saveImage(detailImg3, httpServletRequest);

        tblgoods.setMainImage(mainImage);
        tblgoods.setImage1(image1);
        tblgoods.setImage2(image2);
        tblgoods.setImage3(image3);
        tblgoods.setImage4(image4);
        if ("".equals(tblgoods.getDeadDate())) {
            tblgoods.setDeadDate(null);
        }
        System.out.println(tblgoods);
        boolean i = tblgoodsService.updateById(tblgoods);
        Result<Object> result = new Result<>();
        if (i) {
            result.setCode(1);
            return result;
        } else {
            result.setCode(0);
            return result;
        }
    }

    @GetMapping("/del")
    public Result<Object> del(Tblgoods tblgoods) {
        System.out.println(tblgoods.getGoodsId());
        LambdaQueryWrapper<Tblgoods>lqwGoods=new LambdaQueryWrapper<>();
        lqwGoods.eq(Tblgoods::getGoodsId,tblgoods.getGoodsId());
        tblgoodsService.remove(lqwGoods);
        Result<Object> result = new Result<>();
        result.setCode(1);
        return result;
    }
}

