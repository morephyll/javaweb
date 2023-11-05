$(function () {
    findBrandList()
    fillTopType()

    $("#uploadMainImg").click(function () {
        $("#mainImg").click()
    })
})

//查询商品类别列表
function findGoodsTypeList(parentId){
    let goodsTypeStr=''

    $.ajax({
        url:"type/list",
        data:{
            parentId:parentId
        },
        dataType: "json",
        async:false,
        success:function (result) {
            let typeList = result.records;
            if(typeList.length>0){
                if(parentId==0){
                    goodsTypeStr=`<option value="">请选择商品类别</option>`
                }else{
                    goodsTypeStr=`<option value="">请选择商品子类</option>`
                }
                for (let i = 0; i < typeList.length; i++) {
                    goodsTypeStr += `<option value="${typeList[i].goodsTypeId}">${typeList[i].typeName}</option>`
                }
            }
        }
    })
    return goodsTypeStr
}

//填充顶级商品类别到下拉框
function fillTopType(){
    $("#goodsTypeDiv>select").html(findGoodsTypeList(0))
    layui.form.render()
}

//查询品牌列表
function findBrandList(){
    $.ajax({
        url:"goods/brandList",
        dataType: "json",
        success:function (result) {
            // console.log(result)
            let brandList = result.records;
            let optionStr = `<option value="">请选择商品品牌</option>`
            for (let i = 0; i < brandList.length; i++) {
                optionStr += `<option value="${brandList[i]}">${brandList[i]}</option>`
            }
            $("#goodsBrand").html(optionStr)
            layui.form.render()
        }
    })
}


