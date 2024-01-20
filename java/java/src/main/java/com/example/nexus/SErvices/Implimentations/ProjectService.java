package com.example.nexus.SErvices.Implimentations;

import com.example.nexus.Repositories.ProjectRepo;
import com.example.nexus.Repositories.TeamRepo;
import com.example.nexus.SErvices.Interfaces.IProject;
import com.example.nexus.entities.Project;
import com.example.nexus.entities.Sprint;
import com.example.nexus.entities.Team;
import com.example.nexus.entities.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
@Slf4j
public class ProjectService implements IProject {
    @Autowired
    ProjectRepo projectRepo;
    @Autowired
    TeamRepo teamRepo;
    @Override
    public int Ajouter(Project E) {
     projectRepo.save(E);
     return E.getIdProject();
    }

    @Override
    public List<Project> getAllproj() {
        return projectRepo.findAll();
    }

    @Override
    public void update(Project E) {
        projectRepo.save(E);
    }

    @Override
    public void delete(int id) {
        projectRepo.deleteById((id));

    }
    public Project getProjectWithMostActiveSprints() {
        /*List<Project> projects = projectRepo.findAll();
        Project projectWithMostActiveSprints = null;
        int maxActiveSprints = 0;

        for (Project project : projects) {
            int activeSprintsCount = countActiveSprints(project.getSprints());
            if (activeSprintsCount > maxActiveSprints) {
                maxActiveSprints = activeSprintsCount;
                projectWithMostActiveSprints = project;
            }
        }
*/
        return projectRepo.getProjectWithMostActiveSprints();
    }

    private int countActiveSprints(Set<Sprint> sprints) {
        return (int) sprints.stream()
                .filter(sprint -> sprint.isEtatSprint())
                .count();
    }

}

