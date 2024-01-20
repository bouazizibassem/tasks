package com.example.nexus.controllers;

import com.example.nexus.Repositories.RoleRepo;
import com.example.nexus.Repositories.UserRepo;
import com.example.nexus.SErvices.Implimentations.UserService;
import com.example.nexus.entities.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userService;
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private RoleRepo roleRepo;

    @PostMapping("/adduser")
    public void ajouterUser(@RequestBody User user){
        userService.AjouterUser(user);
    }

    @PostMapping("/{idTeam}/assignUserToTeam/{idUser}")
    public User assignUserToTeam(@PathVariable int idTeam, @PathVariable int  idUser) {
        return userService.assignuserToTeam(idTeam,idUser);}

    @GetMapping("/get/{id}")
    public ResponseEntity<User> getTeamById(@PathVariable int id){
        return ResponseEntity.ok().body(userRepo.findById(id).orElse(null));
    }

    @GetMapping
    @ResponseBody
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    @PutMapping("/{id}")
    @ResponseBody
    public User changeRole(@RequestBody List<String> myRoles , @PathVariable int id) {
        User user = userRepo.findById(id).orElse(null);
        Set<Role> roles = new HashSet<>();
        myRoles.forEach(role -> {
            switch (role){
                case "admin":
                    Role adminrole= roleRepo.findByNameRole(ERole.admin).orElse(null);
                    roles.add(adminrole);
                    break;
                case "manager":
                    Role managrole= roleRepo.findByNameRole(ERole.manager).orElse(null);
                    roles.add(managrole);
                    break;
                case "employee":
                    Role employeerole= roleRepo.findByNameRole(ERole.employee).orElse(null);
                    roles.add(employeerole);
                    break;
                default:
                    Role defaultrole= roleRepo.findByNameRole(ERole.employee).orElse(null);
                    roles.add(defaultrole);

            }
        });
        User u = new User();
        u.setId(user.getId());
        u.setEmail(user.getEmail());
        u.setPassword(user.getPassword());
        u.setUsername(user.getUsername());
        u.setRoles(roles);

        return userRepo.save(u);
    }




}

