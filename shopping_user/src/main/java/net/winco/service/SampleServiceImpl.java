package net.winco.service;

import net.winco.bean.Sample;
import net.winco.mapper.SampleMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Jeremy
 */
@Service
public class SampleServiceImpl implements SampleService{

    @Autowired
    private SampleMapper sampleMapper;

    @Override
    public List<Sample> findSamples(Sample sample){
        return sampleMapper.findSamples(sample);
    }
}
