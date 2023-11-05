
let editmanagerId = sessionStorage.getItem("editmanagerId")
$(function () {
    $("#managerId").val(editmanagerId)
    findEditManagers()
})

function findEditManagers(){
    $.ajax({
        url:"manager/selOne",
        data:{
            managerId:editmanagerId
        },
        dataType:"json",
        success:function (result) {
            if(result.record != null){
                //layer.msg(JSON.stringify(result.data),{time:5000})
                let manager = result.record;
                layui.form.render()
                console.log(manager.managerAcc)
                //回显
                $("#managerId").val(manager.managerId)
                $("#managerAcc").val(manager.managerAcc)
                $("#managerPwd").val(manager.managerPwd)
                $("#realName").val(manager.realName)
                $("#status").val(manager.status)

            }
        }
    })
}