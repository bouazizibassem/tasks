package com.example.nexus.controllers;

import com.example.nexus.Repositories.SprintRepo;
import com.example.nexus.SErvices.Implimentations.SprintService;
import com.example.nexus.entities.Sprint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/Sprint")
public class SprintController {

    @Autowired
    SprintRepo sprintRepo;
    @Autowired
    SprintService sprintService;

    @PostMapping("/addsprint")
    public void ajouterSprint(@RequestBody Sprint sprint){
    sprintService.AjouterSprint(sprint);
    }

    @GetMapping(value = "/sprints")
    @ResponseBody
    public List<Sprint> getAllsprint() {
        return sprintService.getAllSprint();
    }


    @PutMapping("/updateSprint")
    @ResponseBody
    public void updatesprint(@RequestBody Sprint R){
        sprintService.update(R);
    }
    @PutMapping("/updateSprintC")
    @ResponseBody
    public void updatesprintC(@RequestBody Sprint R){
        sprintService.updateC(R);
    }

    @PostMapping("/deleteSprint/{idSprint}")
    @ResponseBody
    public void deleteSprint (@PathVariable  int  idSprint , @RequestBody Sprint sprint){
        sprintService.delete(sprint.getIdSprint());
    }


    @PostMapping("/{idSprint}/projectassign/{idProject}")
    public Sprint assignsprintToProject(@PathVariable int idSprint, @PathVariable int  idProject) {
        return sprintService.assignSprintToProject(idSprint, idProject);}




    @GetMapping("/etat-0")
    public ResponseEntity<List<Sprint>> getSprintsWithEtatZero() {
        List<Sprint> sprints = sprintService.getSprintsByEtatSprint(false);
        return new ResponseEntity<>(sprints, HttpStatus.OK);
    }
    }
