
//当前页
let currentPage = 1;
//每页显示条数
let pageSize = 5;
//总页数
let pageCount = 1;

$(function(){
    findGoodsList();

    findBrandList()

    //全选
    $("#selAll").click(function () {
        if($(this).prop("checked")){
            $("#goods input[type=checkbox]").prop("checked",true)
        }else{
            $("#goods input[type=checkbox]").prop("checked",false)
        }
    })

    //查询按钮事件
    $("#searchGoods").click(function () {
        findGoodsList()
    })
//添加商品
    $("#addGoods").click(function () {
        console.log(111)
        layer.open({
            type:2,
            title: ["添加商品","font-size:18px"],
            content:'addGoods.html',
            icon:1,
            area: ['600px', '500px'],
            // btn:["确定","取消"],
            shade: ["0.4","black"],
            // btn2: function() {
            //     layer.close()
            // },
        })
    })
    //编辑商品
    $(document).on("click","#openUpdWin",function () {
        let goodsId = $(this).attr("goodsId")
        sessionStorage.setItem("editGoodsId",goodsId)
        layer.open({
            type:2,
            title: ["编辑商品","font-size:18px"],
            content:'editGoods.html',
            icon:1,
            area: ['600px', '500px'],
            // btn:["确定","取消"],
            shade: ["0.4","black"],
            // btn2: function() {
            //     layer.close()
            // },
        })
    })
})
// function getImg64(imgName){
//     let base64Img=null;
//     $.ajax({
//         url:"common/download",
//         dataType:"json",
//         data:"&imgUrl="+imgName,
//         success:function (result){
//             if (result!=null){
//                 base64Img=result;
//             }
//         }
//     })
//     return base64Img;
// }

function findGoodsList(){
    $("#loading").show()
    $.ajax({
        url:"goods/list",
        dataType:"json",
        data:$("#searchForm").serialize()+"&currentPage="+currentPage+"&pageSize="+pageSize,
        success:function(result){
            $("#goods").empty()
            var list = result.records
            pageCount = result.total
            for (let i = 0; i < list.length; i++) {
                let imgStr = ""
                if(list[i].mainImage != null){
                    // var img64=getImg64(`${list[i].mainImage}`)
                    // imgStr = `<img src="data:image/png;base64,${img64}" style="width: 50px;height: 50px;object-fit: contain;">`
                    imgStr = `<img src="${list[i].mainImage}" style="width: 50px;height: 50px;object-fit: contain;">`
                }
                $("#goods").append
                (`
                    <tr class="cen">
                        <td><input type="checkbox"/></td>
                        <td class="lt"><a href="#">${list[i].goodsNo}</a></td>
                        <td class="lt"><a href="#">${list[i].goodsName}</a></td>
                        <td>${list[i].typeName}</td>
                        <td>${list[i].goodsBrand}</td>
                        <td>￥${list[i].goodsPrice}</td>
                        <td>${list[i].goodsDiscount}折</td>
                        <td>${list[i].repertoryNum}</td>
                        <td>${list[i].goodsUnits}</td>
                        <td>${imgStr}</td>
                        <td>
                            <a title="编辑" class="mr-5" id="openUpdWin" goodsId="${list[i].goodsId}">编辑</a>
                            <a title="删除" id="delGoods" goodsId="${list[i].goodsId}">删除</a>
                        </td>
                    </tr>
                `)
            }
            $("#loading").hide()
            initPage();
        }
    })
}

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

//查询品牌列表
function findBrandList(){
    $.ajax({
        url:"goods/brandList",
        dataType: "json",
        success:function (result) {
            // console.log(result)
            let brandList = result.records;
            let optionStr = ""
            for (let i = 0; i < brandList.length; i++) {
                optionStr += `<option value="${brandList[i]}">${brandList[i]}</option>`
            }
            $("#goodsBrand").html(optionStr)
        }
    })
}
//删除商品
$(document).on("click","#delGoods",function () {
    let goodsId = $(this).attr("goodsId")
    layer.confirm('确定删除？', {
        title:'系统提示',
        icon: 0,
        shade: 0.3,
        btn: ['确定','取消'],
        btn1:function(index){
            $.ajax({
                url:"goods/del",
                data:{
                    goodsId:goodsId
                },
                dataType:"json",
                success:function (result) {
                    if(result.code>0){
                        layer.msg("删除成功",{icon:1,time:1000})
                        layer.close(index)
                        console.log($(this))
                        findGoodsList();
                    }else{
                        layer.msg("删除失败",{icon:1,time:1000})
                    }
                }
            })
        }
    });
})


