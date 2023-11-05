$(function(){
    $("#helloName").text(JSON.parse(sessionStorage.getItem("user")).realName)
})