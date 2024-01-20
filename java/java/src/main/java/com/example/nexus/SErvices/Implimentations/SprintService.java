package com.example.nexus.SErvices.Implimentations;

import com.example.nexus.Repositories.ProjectRepo;
import com.example.nexus.Repositories.SprintRepo;
import com.example.nexus.SErvices.Interfaces.ISprint;
import com.example.nexus.entities.Project;
import com.example.nexus.entities.Sprint;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class SprintService  implements ISprint {
    @Autowired
    SprintRepo sprintRepo;
    @Autowired
    ProjectRepo projectRepo;

    @Override
    public Integer AjouterSprint(Sprint E) {
        sprintRepo.save(E);
        return E.getIdSprint();
    }

    @Override
    public List<Sprint> getAllSprint() {
        return sprintRepo.findAll();
    }

    @Override
    public void update(Sprint E) {
        sprintRepo.save(E);
    }
    @Override
    public void delete(int  idSprint) {
        System.out.println("tryyyyyy"+idSprint);
        sprintRepo.deleteById(idSprint);

    }

    public Sprint assignSprintToProject(int idSprint, int idProject) {
        Sprint sprint = sprintRepo.findById(idSprint).orElseThrow(() -> new IllegalArgumentException("Invalid sprint id"));
        Project project = projectRepo.findById(idProject).orElseThrow(() -> new IllegalArgumentException("Invalid project id"));
        sprint.setProject(project);
        return sprintRepo.save(sprint);

    }

    public List<Sprint> getSprintsByEtatSprint(boolean etatSprint) {
        return sprintRepo.findByEtatSprint(etatSprint);
    }
}
