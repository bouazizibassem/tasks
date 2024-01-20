package com.example.nexus.SErvices.Implimentations;

import com.example.nexus.Repositories.RoleRepo;
import com.example.nexus.SErvices.Interfaces.IRole;
import com.example.nexus.entities.Role;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class RoleService implements IRole {
    @Autowired
    RoleRepo roleRepo;
    @Override
    public int AjouterDelivery(Role E) {
        roleRepo.save(E);
        return E.getId();
    }

    @Override
    public List<Role> getAllRole() {
        return roleRepo.findAll();
    }

    @Override
    public void update(Role E) {
        roleRepo.save(E);

    }

    @Override
    public void delete(int id) {

     roleRepo.deleteById(id);

    }
}
