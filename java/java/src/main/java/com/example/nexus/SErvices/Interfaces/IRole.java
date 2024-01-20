package com.example.nexus.SErvices.Interfaces;

import com.example.nexus.entities.Role;

import java.util.List;

public interface IRole {
    public int AjouterDelivery(Role E) ;
    public List<Role> getAllRole();

    void update (Role E);
    void delete (int id);

}
