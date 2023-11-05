
$(function () {
    showUser()
    //男装
    findGoodsList(2,"nanzhuang")
    //女装
    findGoodsList(1,"nvzhuang")
    //手机
    findGoodsList(12,"shouji")

    $("#nanzhuangmore").click(function () {
        sessionStorage.setItem("productMoreType","男装")
        location.href="productlistmore.html"
    })

    $("#nvzhuangmore").click(function () {
        sessionStorage.setItem("productMoreType","女装")
        location.href="productlistmore.html"
    })

    $("#shoujimore").click(function () {
        sessionStorage.setItem("productMoreType","手机")
        location.href="productlistmore.html"
    })
})





function findGoodsList(goodsTypeId,target) {
    $.ajax({
        url:"goods/list",
        data:{
            goodsTypeId:goodsTypeId,
            currentPage: 1,
            pageSize:5
        },
        dataType:"json",
        success:function (result) {
            let list = result.data
            console.log(list.length)
            for (let i = 0; i < list.length; i++) {
                $("#"+target).append(`
                    <li>
                        <a  style="cursor: pointer" class="productDetail"  goodsId="${list[i].goodsId}">
                            <img src="${list[i].mainImage}" border="0"
                                alt="${list[i].goodsName}">
                        </a>
                        <span>
                            <a  style="cursor: pointer" class="productDetail"  goodsId="${list[i].goodsId}">${list[i].goodsName}</a>
                        </span>
                        <div>
                            <b>￥${parseInt(list[i].goodsPrice*list[i].goodsDiscount/10)}</b>
                            <i class="scj">￥${list[i].goodsPrice}</i> 
                        </div>
                    </li>
                `)

            }
        }
    })

}

$(document).on("click",".productDetail",function () {
    sessionStorage.setItem("goodsId",$(this).attr("goodsId"))
    window.open("productdetail.html");
})