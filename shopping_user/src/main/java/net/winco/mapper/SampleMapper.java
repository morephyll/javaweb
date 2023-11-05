package net.winco.mapper;

import net.winco.bean.Sample;

import java.util.List;


public interface SampleMapper {
    public List<Sample> findSamples(Sample sample);
}
