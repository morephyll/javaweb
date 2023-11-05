package net.winco.bean;


public class Tblevaluate {

  private long evaluateId;
  private long userId;
  private long goodsId;
  private String content;
  private java.sql.Timestamp createTime;


  public long getEvaluateId() {
    return evaluateId;
  }

  public void setEvaluateId(long evaluateId) {
    this.evaluateId = evaluateId;
  }


  public long getUserId() {
    return userId;
  }

  public void setUserId(long userId) {
    this.userId = userId;
  }


  public long getGoodsId() {
    return goodsId;
  }

  public void setGoodsId(long goodsId) {
    this.goodsId = goodsId;
  }


  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }


  public java.sql.Timestamp getCreateTime() {
    return createTime;
  }

  public void setCreateTime(java.sql.Timestamp createTime) {
    this.createTime = createTime;
  }

}
