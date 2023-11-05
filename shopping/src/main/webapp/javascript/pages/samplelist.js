//当前页
let currentPage = 1;
//每页显示条数
let pageSize = 5;
//总页数
let pageCount = 1;

$(function() {
    findSamples();
    //全选
    $("#selAll").click(function () {
            let selAll = $(this);
            $("#samples input[type=checkbox]").prop("checked", selAll.prop("checked"));
        }
    )
    $(document.body).on('click',$("#samples :checkbox"),(function () {
            let checkBoxCount = $("#samples :checkbox").length;
            let checkedCount = $("#samples :checked").length;
            $("#selAll").prop('checked',checkedCount===checkBoxCount);
            }
        )
    )
})
function findSamples(){
    $("#loading").show()
    $.ajax({
        url:"sample/list",
        dataType:"json",
        data:"&currentPage="+currentPage+"&pageSize="+pageSize,
        success:function(result){
            $("#samples").empty()
            // var list = result.data.list
            var list = result.records
            console.log(list)
            // pageCount = result.data.pages
            pageCount = result.total
            for (let i = 0; i < list.length; i++) {
                $("#samples").append
                (`
                    <tr class="cen">
                        <td><input type="checkbox"/></td>
                        <td class="lt"><a href="#">${list[i].id}</a></td>
                        <td class="lt"><a href="#">${list[i].name}</a></td>
                        <td>
                            <a title="编辑" class="mr-5" id="openUpdWin" sampleId="${list[i].id}">编辑</a>
                            <a title="删除" id="delGoods" sampleId="${list[i].id}">删除</a>
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



