package net.winco.bean;


public class Tblfavorite {

  private long favoriteId;
  private long userId;
  private long goodsId;


  public long getFavoriteId() {
    return favoriteId;
  }

  public void setFavoriteId(long favoriteId) {
    this.favoriteId = favoriteId;
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

}
