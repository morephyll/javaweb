let goodsId = sessionStorage.getItem("goodsId")

$(function () {
    showUser()
    findGoods()
    findFavorite()

    //点击加入购物车
    $("#addToCart").click(function () {
        //判断购物车中是否已经有这个商品
        $.ajax({
            url:"shoppingcart/findShoppingcartGoods",
            data:{
                goodsId:goodsId,
                userId:userId
            },
            dataType:"json",
            success:function (result) {
                if(result.data){
                    updateShoppingcartNum()
                }else{
                    addToShoppingcart()
                }
            }
        })
    })


    //点击收藏
    $("#addToFavorite").click(function () {
        if($("#addToFavorite img").prop("src").indexOf("favorite2")>=0){
            //已收藏---》删除
            $.ajax({
                url:"favorite/delFavorite",
                data:{
                    goodsId:goodsId,
                    userId:userId
                },
                dataType: "json",
                success:function (result) {
                    if(result.data==1){
                        layer.msg("取消收藏成功",{time:1000})
                        $("#addToFavorite img").prop("src","static/picture/favorite.png")
                    }else{
                        layer.msg("取消收藏失败",{time:1000})
                    }
                }
            })
        }else{
            //未收藏---》增加
            $.ajax({
                url:"favorite/addFavorite",
                data:{
                    goodsId:goodsId,
                    userId:userId
                },
                dataType: "json",
                success:function (result) {
                    if(result.data==1){
                        layer.msg("收藏成功",{time:1000})
                        $("#addToFavorite img").prop("src","static/picture/favorite2.png")
                    }else{
                        layer.msg("收藏失败",{time:1000})
                    }
                }
            })
        }
    })
})

//加入购物车
function addToShoppingcart() {
    let goodsNum = $("#shopnum").val()
    $.ajax({
        url:"shoppingcart/add",
        data:{
            goodsId:goodsId,
            userId:userId,
            goodsNum:goodsNum
        },
        dataType:"json",
        success:function (result) {
            if(result.data>0){
                layer.msg("加入购物车成功",{time:1000})
            }else{
                layer.msg("加入购物车失败",{time:1000})
            }
        }
    })
}

//更新购物车数量
function updateShoppingcartNum() {
    let goodsNum = $("#shopnum").val()
    $.ajax({
        url:"shoppingcart/updateShoppingcartGoodsNum",
        data:{
            goodsId:goodsId,
            userId:userId,
            goodsNum:goodsNum
        },
        dataType:"json",
        success:function (result) {
            if(result.data>0){
                layer.msg("加入购物车成功",{time:1000})
            }else{
                layer.msg("加入购物车失败",{time:1000})
            }
        }
    })
}

function findFavorite() {
    $.ajax({
        url:"favorite/selOne",
        data:{
            goodsId:goodsId,
            userId:userId
        },
        dataType: "json",
        success:function (result) {
            if(result.data==null){
                $("#addToFavorite img").prop("src","static/picture/favorite.png")
            }else{
                $("#addToFavorite img").prop("src","static/picture/favorite2.png")
            }
        }
    })
}

function findGoods() {
    $.ajax({
        url:"goods/detail",
        data:{goodsId:goodsId},
        dataType:"json",
        success:function (result) {
            $("#mainImg").prop("src",""+result.data.mainImage)
            $("#demo1 img").prop("src",""+result.data.mainImage)
            $("#demo2 img").prop("src",""+result.data.mainImage)
            $("#mainImg").attr("alt",result.data.goodsName)

            $("#goodsName").html(result.data.goodsName)
            $("#goodsBrand").html("品牌："+result.data.goodsBrand)
            $("#goodsPrice").html("￥"+parseInt(result.data.goodsPrice*1.5))
            $("#goodsPrice2").html("￥"+parseInt(result.data.goodsPrice))
            $("#goodsNo").html(result.data.goodsNo)
            $("#createDate").html(result.data.createDate)
            $("#detailImg").append(`<img src="${result.data.image1}"></img><br>`)
            $("#detailImg").append(`<img src="${result.data.image2}"></img><br>`)
            $("#detailImg").append(`<img src="${result.data.image3}"></img><br>`)
            $("#detailImg").append(`<img src="${result.data.image4}"></img><br>`)
        }
    })
}