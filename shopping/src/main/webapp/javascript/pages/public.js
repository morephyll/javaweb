
//读取本地图片--1张
 function loadImg(fileTarget,viewTarget){
    let fileEle = document.getElementById(fileTarget)
    if(fileEle.files.length){
        let file = fileEle.files[0];
        let reader = new FileReader();
        //新建 FileReader 对象
        reader.onload = function(){
            // 当 FileReader 读取文件时候，读取的结果会放在 FileReader.result 属性中
            document.getElementById(viewTarget).src = this.result;
        };
        // 设置以什么方式读取文件，这里以base64方式
        reader.readAsDataURL(file);
    }
}

//读取本地图片--多张
function loadImgs(fileTarget,viewTarget){
    let fileEle = document.getElementById(fileTarget)
    if(fileEle.files.length>0){
        if(fileEle.files.length<=4){
            for (let i = 0; i < fileEle.files.length; i++) {
                //新建 FileReader 对象
                let reader = new FileReader();
                let file = fileEle.files[i];
                // 设置以什么方式读取文件，这里以base64方式
                reader.readAsDataURL(file);

                reader.onload = function(){
                    // 当 FileReader 读取文件时候，读取的结果会放在 FileReader.result 属性中
                    $("#"+viewTarget).append(`<img style="width:100px;height: 100px;margin-left: 15px;" src="${this.result}">`)
                };
            }
        }else{
            layer.msg("最多四张详情图！！！")
        }

    }else{
        layer.msg("请选择图片！！！")
    }
}

