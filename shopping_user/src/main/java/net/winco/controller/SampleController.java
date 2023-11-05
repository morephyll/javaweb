package net.winco.controller;

import net.winco.bean.Result;
import net.winco.bean.Sample;
import net.winco.constant.Code;
import net.winco.service.SampleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.List;

@Controller
@RequestMapping("/sample")

public class SampleController {
    @Autowired
    private SampleService sampleService;
    @ResponseBody
    @RequestMapping("/list")
    public Result findSamples(Sample sample){
        sample = sample==null?new Sample():sample;
        List<Sample> list = sampleService.findSamples(sample);
        return new Result(Code.FIND_OK,list,"查询成功");
    }

}
