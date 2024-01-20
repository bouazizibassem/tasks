package com.example.nexus.Repositories;

import com.example.nexus.entities.ERole;
import com.example.nexus.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepo extends JpaRepository<Role, Integer> {
    Optional<Role> findByNameRole(ERole nameRole);
}
