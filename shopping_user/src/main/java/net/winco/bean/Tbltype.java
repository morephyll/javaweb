package net.winco.bean;

import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

@Data
public class Tbltype {

  @TableId
  private long goodsTypeId;
  private String typeName;
  private long parentId;
  private long status;

}
