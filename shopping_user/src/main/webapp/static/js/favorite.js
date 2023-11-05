$(function () {
    showUser()
    //查询收藏夹商品列表
    favoriteGoodsList()

    $("#delete").click(function () {
        let goodsIdArr = []
        //获取勾选的商品的goodsId
        $("input[type=checkbox]:checked").each(function () {
            let goodsId = $(this).attr("goodsId")
            goodsIdArr.push(goodsId)
        })

        $.ajax({
            type:"post",
            url:"favorite/delFavorites",
            data:{
                userId:userId,
                // goodsIdArr:JSON.stringify(goodsIdArr)
                goodsIdArr:goodsIdArr
            },
            dataType: "json",
            success:function (result) {
                let num = result.data
                if(num>0){
                    layer.msg("取消收藏"+num+"件商品成功",{time:1000})
                    favoriteGoodsList()
                }else{
                    layer.msg("取消收藏失败",{time:1000})
                }
            }
        })
    })
})

function favoriteGoodsList() {
    $.ajax({
        url:"favorite/favoriteGoodsList",
        data:{
            userId:userId
        },
        dataType:"json",
        success:function (result) {
            let list = result.data
            if(list != null){
                $("#favoriteGoods").empty()
                for (let i = 0; i < list.length; i++) {
                    $("#favoriteGoods").append(`
                        <div class="box_css_3 clearfix" style="margin-bottom:5px;width: 48%;float: left;margin-right: 1%;">
                            <div class="">
                                <div style="float:left;width:200px;">
                                    <a style="cursor: pointer" class="productDetail" target="_blank" goodsId="${list[i].goodsId}">
                                    <img src="${list[i].mainImage}" border="0" width="170px" height="170px" alt="${list[i].goodsName}" style="padding:1px; border:#F0F0F0 1px solid;"></a> <br>
                                </div>
                                <div style="float:left; margin-left:10px; line-height:24px; width:260px;overflow:hidden">
                                    <h1>${list[i].goodsName}</h1>
                                    <div style="padding-bottom:7px; line-height:18px;">品牌：${list[i].goodsBrand}</div>
                                    <!--leixing-->
                                    市场价格：<span style="text-decoration:line-through">￥${list[i].goodsPrice}</span><br>
                                    商品编号：￥${list[i].goodsNo}<br>
                                    出厂日期：${list[i].createDate}<br>
                                    <div style="margin-bottom:5px;" class="clearfix">
                                    </div>
                                    <div class="clearfix" style="margin:8px 0px 14px 0px; ">
                                        <div style="float:right\t"><input type="checkbox" class="shoppingcart-chkbox" goodsId="${list[i].goodsId}"/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `)
                }
            }
        }
    })
}

$(document).on("click",".productDetail",function () {
    sessionStorage.setItem("goodsId",$(this).attr("goodsId"))
    window.open("productdetail.html");
})