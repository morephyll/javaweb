package net.winco.Utils;

import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.UUID;

public class ImageUtils {
    /**
     * 客户端发送过来的图片到服务器，并且返回图片的相对路径
     * @return
     */
    public static String saveImage(MultipartFile multipartFile, HttpServletRequest request) {
        String filePath = null;
        String savePath="D:\\newproject\\img";
        try {
            //文件后缀名
            String fileSuffix = multipartFile.getOriginalFilename().substring(multipartFile.getOriginalFilename().lastIndexOf("."));
            String uuid = UUID.randomUUID().toString().replaceAll("-", "");
            // //上传路径保存设置
            // String path = request.getSession().getServletContext().getRealPath("/upload");
            //如果路径文件夹不存在，就创建一个
            File realPath = new File(savePath);
            if(!realPath.exists()){
                realPath.mkdir();
            }
            multipartFile.transferTo(new File(savePath+"\\"+uuid+fileSuffix));
            filePath =  savePath+"\\"+uuid+fileSuffix;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return filePath;
    }
}
