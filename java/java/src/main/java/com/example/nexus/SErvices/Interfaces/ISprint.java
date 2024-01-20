package com.example.nexus.SErvices.Interfaces;

import com.example.nexus.entities.Sprint;

import java.util.List;

public interface ISprint {
    public Integer AjouterSprint(Sprint E) ;
    public List<Sprint> getAllSprint();

    public void update (Sprint E);
    public void updateC (Sprint E);
    public void delete (int id);
}
