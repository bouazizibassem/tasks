package com.example.nexus.SErvices.Interfaces;

import com.example.nexus.entities.Project;

import java.util.List;

public interface IProject {
    public int Ajouter(Project E) ;
    public List<Project> getAllproj();

    void update (Project E);
    void delete (int id);
}
