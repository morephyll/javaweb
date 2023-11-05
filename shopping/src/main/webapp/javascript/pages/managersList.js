
//当前页
let currentPage = 1;
//每页显示条数
let pageSize = 5;
//总页数
let pageCount = 1;

$(function(){
    findManagerList();

    //全选
    $("#selAll").click(function () {
        if($(this).prop("checked")){
            $("#managers input[type=checkbox]").prop("checked",true)
        }else{
            $("#managers input[type=checkbox]").prop("checked",false)
        }
    })

    //查询按钮事件
    $("#searchManager").click(function () {
        findManagerList()
    })
//添加商品
    $("#addManager").click(function () {
        layer.open({
            type:2,
            title: ["添加人员管理","font-size:18px"],
            content:'addmanagers.html',
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
        let managerId = $(this).attr("managerId")
        sessionStorage.setItem("editmanagerId",managerId)
        layer.open({
            type:2,
            title: ["编辑商品","font-size:18px"],
            content:'editManager.html',
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


function findManagerList(){
    $("#loading").show()
    $.ajax({
        url:"manager/list",
        dataType:"json",
        data:$("#searchForm").serialize()+"&currentPage="+currentPage+"&pageSize="+pageSize,
        success:function(result){
            $("#managers").empty()
            var list = result.records
            pageCount = result.total
            for (let i = 0; i < list.length; i++) {

                $("#managers").append
                (`
                    <tr class="cen">
                        <td><input type="checkbox"/></td>
                             <td class="lt"><a href="#">${list[i].managerId}</a></td>
                        <td class="lt"><a href="#">${list[i].managerAcc}</a></td>
                        <td>${list[i].managerPwd}</td>
                        <td>${list[i].realName}</td>
                        <td>${list[i].status}</td>
                        <td>
                            <a title="编辑" class="mr-5" id="openUpdWin" managerId="${list[i].managerId}">编辑</a>
                            <a title="删除" id="delmanagers" managerId="${list[i].managerId}">删除</a>
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
    findManagerList()
})

//上一页
$(document).on("click",".prevPage",function () {
    currentPage--
    findManagerList()
})

//下一页
$(document).on("click",".nextPage",function () {
    currentPage++
    findManagerList()
})


//删除商品
$(document).on("click","#delmanagers",function () {
    let managerId = $(this).attr("managerId")
    layer.confirm('确定删除？', {
        title:'系统提示',
        icon: 0,
        shade: 0.3,
        btn: ['确定','取消'],
        btn1:function(index){
            $.ajax({
                url:"manager/del",
                data:{
                    managerId:managerId
                },
                dataType:"json",
                success:function (result) {
                    if(result.code>0){
                        layer.msg("删除成功",{icon:1,time:1000})
                        layer.close(index)
                        console.log($(this))
                        findManagerList();
                    }else{
                        layer.msg("删除失败",{icon:1,time:1000})
                    }
                }
            })
        }
    });
})


