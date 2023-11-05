package net.winco.bean;


public class Tbladdress {

  private long addrId;
  private long userId;
  private long regionId;
  private String addr;


  public long getAddrId() {
    return addrId;
  }

  public void setAddrId(long addrId) {
    this.addrId = addrId;
  }


  public long getUserId() {
    return userId;
  }

  public void setUserId(long userId) {
    this.userId = userId;
  }


  public long getRegionId() {
    return regionId;
  }

  public void setRegionId(long regionId) {
    this.regionId = regionId;
  }


  public String getAddr() {
    return addr;
  }

  public void setAddr(String addr) {
    this.addr = addr;
  }

}
