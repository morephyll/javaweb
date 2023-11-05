package net.winco.bean;


import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

@Data
public class Tblfavorite {
  @TableId
  private long favoriteId;
  private long userId;
  private long goodsId;

}
