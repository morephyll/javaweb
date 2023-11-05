$(function(){
    //fix placeholder
    var ipttest=document.createElement("input");
    if(!Object.prototype.hasOwnProperty.call(ipttest,"placeholder")){
        $("input[placeholder],textarea[placeholder]").each(function(i,ipt){
            $(ipt).val($(ipt).attr("placeholder"));
        }).on("focus",function(){
            if($(this).val()==$(this).attr("placeholder")) $(this).val("");
        }).on("blur",function(){
            if($(this).val()=="") $(this).val($(this).attr("placeholder"));
        });
    }
    //fix maxlength
    ipttest=document.createElement("textarea");
    if(!Object.prototype.hasOwnProperty.call(ipttest,"maxLength")){
        $("textarea[maxlength]").on("keyup",function(){
            if($(this).val().length>parseInt($(this).attr("maxlength"))){
                $(this).val($(this).val().substr(0,parseInt($(this).attr("maxlength"))));
            }
        }).on("blur",function(){
            if($(this).val().length>parseInt($(this).attr("maxlength"))){
                $(this).val($(this).val().substr(0,parseInt($(this).attr("maxlength"))));
            }
        });
    }
});
