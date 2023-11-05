package net.winco.bean;

import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

@Data
public class Tblmanager {
  @TableId
  private long managerId;
  private String managerAcc;
  private String managerPwd;
  private String realName;
  private long status;


}
