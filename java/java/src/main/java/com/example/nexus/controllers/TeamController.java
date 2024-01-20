package com.example.nexus.controllers;

import com.example.nexus.Repositories.TeamRepo;
import com.example.nexus.Repositories.UserRepo;
import com.example.nexus.SErvices.Implimentations.TeamService;
import com.example.nexus.entities.Team;
import com.example.nexus.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.HashSet;
import java.util.Set;

@CrossOrigin("*")
@RestController
@RequestMapping("/team")
public class TeamController {
    @Autowired
    TeamService teamService;
    @Autowired
    TeamRepo teamRepo;
    @Autowired
    private UserRepo userRepo;

    @PostMapping("/addteam")
    public Team ajouterUser(@RequestBody Team team){

        return  teamRepo.save(team);
    }


    @GetMapping("/get/{id}")
    public ResponseEntity<Team> getTeamById(@PathVariable int id){
        return ResponseEntity.ok().body(teamRepo.findById(id).orElse(null));
    }

    @PostMapping("/affect/{id}/{idUser}")
    public User affrct(@PathVariable int id , @PathVariable int idUser){
        User user = userRepo.findById(idUser).orElse(null);
        Team team = teamRepo.findById(id).orElse(null);
        user.setTeam(team);
        return userRepo.save(user);

    }

}
