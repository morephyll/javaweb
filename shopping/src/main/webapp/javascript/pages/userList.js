//当前页
let currentPage = 1;
//每页显示条数
let pageSize = 5;
//总页数
let pageCount = 1;

$(function(){
    findUsersList();


    //全选
    $("#selAll").click(function () {
        if($(this).prop("checked")){
            $("#goods input[type=checkbox]").prop("checked",true)
        }else{
            $("#goods input[type=checkbox]").prop("checked",false)
        }
    })

    //查询按钮事件
    $("#searchUser").click(function () {
        findUsersList();
    })

   
})

function findUsersList(){
    $("#loading").show()
    $.ajax({
        url:"users/list",
        dataType:"json",
        data:$("#searchForm").serialize()+"&currentPage="+currentPage+"&pageSize="+pageSize,
        success:function(result){
            $("#goods").empty()
            var list = result.records
            pageCount = result.total
            for (let i = 0; i < list.length; i++) {
                let imgStr = ""
                if(list[i].mainImage != null){
                    imgStr = `<img src="${list[i].mainImage}" style="width: 50px;height: 50px;">`
                }
                $("#users").append
                (`
                    <tr class="cen">
                        <td><input type="checkbox"/></td>
                        <td class="lt"><a href="#">${list[i].userId}</a></td>
                        <td class="lt"><a href="#">${list[i].userAcc}</a></td>
                        <td>${list[i].userPwd}</td>
                        <td>${list[i].userName}</td>
                        <td>${list[i].idType}</td>
                        <td>${list[i].idNo}</td>
                        <td>${list[i].phone}</td>
                        <td>${list[i].email}</td>
                        <td>${list[i].realName}</td>
                        <td>${list[i].sex}</td>
                        <td>${list[i].birthday}</td>
                        <td>${list[i].balance}</td>
                        <td>${list[i].registerDate}</td>
                        <td>${list[i].status}</td>
                        <td>
                            <a title="编辑" class="mr-5" id="openUpdWin" goodsId="${list[i].goodsId}">编辑</a>
                            <a title="删除" id="delUser" goodsId="${list[i].goodsId}">删除</a>
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

// //查询品牌列表
// function findBrandList(){
//     $.ajax({
//         url:"goods/brandList",
//         dataType: "json",
//         success:function (result) {
//             // console.log(result)
//             let brandList = result.data;
//             let optionStr = ""
//             for (let i = 0; i < brandList.length; i++) {
//                 optionStr += `<option value="${brandList[i]}">${brandList[i]}</option>`
//             }
//             $("#goodsBrand").html(optionStr)
//         }
//     })
// }



