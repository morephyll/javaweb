package net.winco.controller;

import net.winco.utils.CodeUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.OutputStream;

@Controller
public class CodeController {
    @RequestMapping("/code")
    public void code(HttpSession session, HttpServletResponse resp) throws IOException {
        int width = 120; // 图片宽度
        int height = 40; // 图片高度
        // 指定图片格式 (不是指MIME类型)
        String imgType = "jpeg";
        // 获得可以向客户端返回图片的输出流
        OutputStream output = resp.getOutputStream();
        // 创建验证码图片并返回图片上的字符串
        String code = CodeUtils.create(width, height, imgType, output);

        // 存储验证码到session中
        session.setAttribute("code", code);
    }
}
