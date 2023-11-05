//当前页
let currentPage = 1;
//每页显示条数
let pageSize = 10;
//总页数
let pageCount = 1;


let productMoreType = sessionStorage.getItem("productMoreType")


$(function () {
    $("#productMoreType").html(productMoreType)
    showUser()
    findGoodsList()
})

//分页查询商品列表
function findGoodsList(){
    let goodsTypeId
    if(productMoreType=="男装"){
        goodsTypeId=2
    }else if(productMoreType=="女装"){
        goodsTypeId=1
    }else if(productMoreType=="手机"){
        goodsTypeId=12
    }

    $.ajax({
        url:"goods/list",
        dataType:"json",
        data:{goodsTypeId:goodsTypeId, currentPage:currentPage, pageSize:pageSize},
        success:function(result){
            $("#productList").empty()
            var list = result.data.list
            pageCount = result.data.pages
            for (let i = 0; i < list.length; i++) {
                $("#productList").append
                (`
                    <li>
                        <a style="cursor: pointer" class="productDetail" target="_blank" goodsId="${list[i].goodsId}">
                            <img src="${list[i].mainImage}" width="170" height="170" border="0" alt="${list[i].goodsName}">
                        </a>
                        <span>
                            <a style="cursor: pointer" class="productDetail" target="_blank" goodsId="${list[i].goodsId}">${list[i].goodsName}</a>
                        </span>
                        <div>
                            <b>￥${parseInt(list[i].goodsPrice*list[i].goodsDiscount/10)}</b>
                            <i class="scj">￥${list[i].goodsPrice}</i>
                        </div>
                    </li>
                `)
            }
            initPage()
        }
    })
}

$(document).on("click",".productDetail",function () {
    sessionStorage.setItem("goodsId",$(this).attr("goodsId"))
    location.href="productdetail.html"
})

function initPage(){
    $(".pagination").createPage({
        pageCount:pageCount,
        current:currentPage,
        backFn:function(p){
            console.log(p);
        }
    });
}

//点击页码
$(document).on("click",".tcdNumber",function(){
    currentPage = $(this).text()
    findGoodsList()
})

//上一页
$(document).on("click",".prevPage",function () {
    currentPage--
    findGoodsList()
})

//下一页
$(document).on("click",".nextPage",function () {
    currentPage++
    findGoodsList()
})