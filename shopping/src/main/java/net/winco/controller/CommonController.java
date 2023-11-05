package net.winco.controller;

import org.apache.commons.io.IOUtils;
import org.springframework.http.HttpRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.util.Base64;

@RestController
@RequestMapping("/common")
public class CommonController {
    // private String imgurl = "D:\\newproject\\img";

    // /**
    //  * 传输图片数据base64到html
    //  */
    // @GetMapping("/download")
    // public String download(String imgUrl) {
    //     String[] containsStr={"upload"};
    //     for (String conStr : containsStr) {
    //         if(imgUrl.contains(conStr)){
    //             return null;
    //         }
    //     }
    //     String base64Img=null;
    //     File file = new File(imgUrl);
    //     try {
    //         FileInputStream imageInFile = new FileInputStream(file);
    //         byte[] imageData = new byte[(int) file.length()];
    //         imageInFile.read(imageData);
    //         //编码为Base64字符串
    //         base64Img = Base64.getEncoder().encodeToString(imageData);
    //         imageInFile.close();
    //
    //     } catch (Exception e) {
    //         e.printStackTrace();
    //     }
    //     return base64Img;
    // }

    // /**
    //  * 传输图片数据base64到html
    //  */
    // @GetMapping("/download")
    // public void download(String imgUrl, HttpServletResponse resp) {
    //     String[] containsStr = {"upload"};
    //     for (String conStr : containsStr) {
    //         if (imgUrl.contains(conStr)) {
    //             imgUrl = null;
    //         }
    //     }
    //     if (imgUrl!=null){
    //         try {
    //             //根据名称在imgurl中寻找对应的图片,创建输出流
    //             FileInputStream fileinput = new FileInputStream(new File(imgUrl));
    //             resp.setContentType("image/jpeg");
    //             //html页面输出流
    //             ServletOutputStream outputStream = resp.getOutputStream();
    //             //利用工具完成数据转移
    //             IOUtils.copy(fileinput,outputStream);
    //         } catch (Exception e) {
    //             e.printStackTrace();
    //         }
    //     }
    // }
}
