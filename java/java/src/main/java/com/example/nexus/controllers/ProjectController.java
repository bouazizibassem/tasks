package com.example.nexus.controllers;

import com.example.nexus.SErvices.Implimentations.ProjectService;
import com.example.nexus.entities.Project;
import com.example.nexus.entities.Role;
import com.example.nexus.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/project")
public class ProjectController {
    @Autowired
    ProjectService projectService;


    @PostMapping("/addproject")
    public void ajouterproj(@RequestBody Project  project){
        projectService.Ajouter(project);
    }
    @GetMapping(value = "/sprints")
    @ResponseBody
    public List<Project> getAllprojects() {
        return projectService.getAllproj();
    }


    @PutMapping("/updateproject")
    @ResponseBody
    public void updateprojet(@RequestBody Project R){
        projectService.update(R);
    }

    @DeleteMapping("/deleteproject/{id}")
    @ResponseBody
    public void deleterole (@PathVariable  int  idProject  ){
        projectService.delete(idProject);
    }
// statistique
    @GetMapping("/most-active-sprints")
    public Project getProjectWithMostActiveSprints() {
        return projectService.getProjectWithMostActiveSprints();
    }
}
