package net.winco.Utils;

import lombok.Data;

import java.util.List;

@Data
public class Result <T>{
    private List<T> records;
    private T record;
    private Integer code;
}
