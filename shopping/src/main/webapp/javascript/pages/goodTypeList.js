let typeId;

$(function(){
    findTypeList(0,'treeMenu')

    openCurrentMenu()

    //添加顶级菜单按钮事件
    $("#addMaxMenu").click(function () {
        $("#addMaxWin").show()
    })

    //展开全部
    $("#openAll").click(function () {
        $("#treeMenu li:has(ul)").prop("class","has-list open in")
    })

    //收起全部
    $("#closeAll").click(function () {
        $("#treeMenu li:has(ul)").prop("class","")
    })

    //添加子菜单按钮事件
    $(document).on("click","#treeMenu button[target=addSun]",function () {
        typeId = $(this).attr("typeId")
        sessionStorage.setItem("typeId",typeId)
        $("#addWin").show()
    })

    //修改子菜单按钮事件
    $(document).on("click","#treeMenu button[target=updateMenu]",function () {
        let typeName = $(this).attr("typeName")
        typeId = $(this).attr("typeId")
        sessionStorage.setItem("typeId",typeId)
        $("#updWin input[type=text]").val(typeName)
        $("#updWin").show()
    })

    //取消添加子菜单
    $(document).on("click","#cancelAdd",function () {
        $("#addWin input[type=text]").val("")
        $("#addWin").hide()
    })

    //取消添加顶级菜单
    $(document).on("click","#cancelMaxAdd",function () {
        $("#addMaxWin input[type=text]").val("")
        $("#addMaxWin").hide()
    })

    //取消修改
    $(document).on("click","#cancelUpd",function () {
        $("#updWin input[type=text]").val("")
        $("#updWin").hide()
    })

    //删除按钮事件
    $(document).on("click","#treeMenu button[target=delMenu]",function () {
        let $ele = $(this)
        let typeName = $(this).attr("typeName")
        let goodsTypeIdArr=[]
        if($(this).parent().parent().find("li").length>0){
            typeName = "【"+typeName+"】菜单及其子"
            //要删除的所有菜单id
            $(this).parent().parent().find("button[target=delMenu]").each(function () {
                goodsTypeIdArr.push($(this).attr("typeId"))
            })
        }else{
            typeName = "【"+typeName+"】"
            goodsTypeIdArr.push($(this).attr("typeId"))
        }

        layer.confirm('确定删除'+typeName+'菜单？', {
            title:'系统提示',
            btn: ['确定','取消'],
            btn1:function(index){
                $.ajax({
                    url:"type/del",
                    data:{
                        goodsTypeIdArr:goodsTypeIdArr
                    },
                    type:"post",
                    dataType:"json",
                    success:function (result) {
                        if(result.data>0){
                            layer.msg("删除成功",{icon:1,time:1000})
                            layer.close(index)
                            console.log($(this))
                            $ele.parent().parent().remove()
                        }else{
                            layer.msg("删除失败",{icon:1,time:1000})
                        }
                    }
                })
            }
        });
    })


    //确认添加子菜单
    $(document).on("click","#sureAdd",function () {
        let typeName = $("#addWin input[type=text]").val()
        if(typeName==''){
            alert("菜单内容不能为空！！！")
        }else{
            $.ajax({
                url:"type/add",
                data:{parentId:typeId,typeName:typeName},
                dataType: "json",
                success:function (result) {
                    if(result.data){
                        $("#addWin").hide()
                        layer.msg("添加成功",{icon:1,time:1000})
                        location.reload()
                    }else{
                        layer.msg("添加失败",{icon:5,time:1000})
                    }
                }
            })
        }
    })

    //确认添加顶级菜单
    $(document).on("click","#sureMaxAdd",function () {
        let typeName = $("#addMaxWin input[type=text]").val()
        if(typeName==''){
            alert("菜单内容不能为空！！！")
        }else{
            $.ajax({
                url:"type/add",
                data:{parentId:0,typeName:typeName},
                dataType: "json",
                success:function (result) {
                    if(result.data){
                        $("#addMaxWin").hide()
                        layer.msg("添加成功",{icon:1,time:1000})
                        location.reload()
                    }else{
                        layer.msg("添加失败",{icon:5,time:1000})
                    }
                }
            })
        }
    })

    //确认修改
    $(document).on("click","#sureUpd",function () {
        let typeName = $("#updWin input[type=text]").val()
        if(typeName==''){
            alert("菜单内容不能为空！！！")
        }else{
            $.ajax({
                url:"type/upd",
                data:{goodsTypeId:typeId,typeName:typeName},
                dataType: "json",
                success:function (result) {
                    if(result.data){
                        $("#updWin").hide()
                        new $.zui.Messager('修改成功', {
                            type: 'success', // 定义颜色主题
                            time:1000,
                            placement: 'center'// 定义显示位置
                        }).show();
                        location.reload()


                    }else{
                        new $.zui.Messager('添加失败', {
                            type: 'warning', // 定义颜色主题
                            time:1000,
                            placement: 'center'// 定义显示位置
                        }).show();
                    }
                }
            })
        }
    })
})

function openCurrentMenu(){
    let prevTypeId = parseInt(sessionStorage.getItem("typeId"))
    if(prevTypeId>0){
        $("#sun-"+prevTypeId).prop("class","has-list open in")
        $("#sun-"+prevTypeId).parents("li").prop("class","has-list open in")
    }
    sessionStorage.removeItem("typeId")
}
function findTypeList(pId,target) {
    $.ajax({
        url:"type/list",
        data:{parentId:pId},
        dataType:"json",
        async:false,
        success:function (result) {
            if(pId==0){
                $("#treeMenu").empty()
            }
            let typeList = result;
            let $parent = $("#"+target)
            if(pId>0 && typeList.length>0){
                $parent.append("<ul></ul>")
                $parent = $("#"+target+">ul")
            }

            for (let i = 0; i < typeList.length; i++) {
                $parent.append(
                    `
                    <li id="sun-${typeList[i].goodsTypeId}">
                        <a href="#">${typeList[i].typeName}</a>
                        <div style="position: absolute;margin-top: -30px;right:6%">
                            <button class="btn btn-primary" typeId="${typeList[i].goodsTypeId}" target="addSun">添加子菜单</button>
                            <button class="btn btn-info " typeName="${typeList[i].typeName}" typeId="${typeList[i].goodsTypeId}" target="updateMenu">修改</button>
                            <button class="btn btn-warning " typeName="${typeList[i].typeName}" typeId="${typeList[i].goodsTypeId}" target="delMenu">删除</button>
                        </div>
                    </li>
                    `
                )
                findTypeList(typeList[i].goodsTypeId,"sun-"+typeList[i].goodsTypeId)
            }
        }
    })
}
