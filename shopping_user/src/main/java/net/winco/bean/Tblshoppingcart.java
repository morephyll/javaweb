package net.winco.bean;


import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

@Data
public class Tblshoppingcart {
  @TableId
  private long cartId;
  private long userId;
  private long goodsId;
  private long goodsNum;

}
