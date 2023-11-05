package net.winco.service;

import net.winco.bean.Sample;

import java.util.List;

/**
 * @author Jeremy
 */
public interface SampleService {
    public List<Sample> findSamples(Sample sample);
}
