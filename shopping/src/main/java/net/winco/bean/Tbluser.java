package net.winco.bean;

import lombok.Data;

@Data
public class Tbluser {

  private long userId;
  private String userAcc;
  private String userPwd;
  private String userName;
  private String idType;
  private String idNo;
  private String phone;
  private String email;
  private String realName;
  private String sex;
  private java.sql.Date birthday;
  private double balance;
  private java.sql.Date registerDate;
  private long status;

}
