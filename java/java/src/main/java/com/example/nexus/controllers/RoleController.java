package com.example.nexus.controllers;

import com.example.nexus.SErvices.Implimentations.RoleService;
import com.example.nexus.entities.Role;
import com.example.nexus.entities.Sprint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Role")
public class RoleController {
    @Autowired
    RoleService  roleService;


    @PostMapping("/addsprint")
    public void ajouterRole(@RequestBody Role role){
        roleService.AjouterDelivery(role);
    }
    @GetMapping(value = "/sprints")
    @ResponseBody
    public List<Role> getAllroles() {
        return roleService.getAllRole();
    }


    @PutMapping("/updateSprint")
    @ResponseBody
    public void updaterole(@RequestBody Role R){
        roleService.update(R);
    }

    @DeleteMapping("/deleteSprint/{id}")
    @ResponseBody
    public void deleterole (@PathVariable  int  idRole ){
        roleService.delete(idRole);
    }

}
