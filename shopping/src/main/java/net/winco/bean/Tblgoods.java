package net.winco.bean;

import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;
@Data
public class Tblgoods {
  @TableId
  private long goodsId;
  private long goodsTypeId;
  private String goodsNo;
  private String goodsName;
  private String goodsBrand;
  private double goodsPrice;
  private String goodsUnits;
  private double goodsDiscount;
  private double repertoryNum;
  private long status;
  private java.sql.Date createDate;
  private java.sql.Date deadDate;
  private String mainImage;
  private String image1;
  private String image2;
  private String image3;
  private String image4;
}
