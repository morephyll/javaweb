let user = null;
let userId=null;
if(sessionStorage.getItem("user")!=null) {
    user = JSON.parse(sessionStorage.getItem("user"))
    userId=user.userId;
}
function showUser() {
    if(user != null){
        $("#userDiv").html(`
            <span>您好：${user.userName}</span>
            
        `)
    }
}