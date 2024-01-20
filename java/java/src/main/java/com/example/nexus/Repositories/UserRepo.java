package com.example.nexus.Repositories;

import com.example.nexus.entities.ERole;
import com.example.nexus.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
    Boolean existsByUsername(String username);
    Boolean existsByEmail( String email);
    Optional<User> findByUsername(String username);
    Optional<User> findUserByEmail(String email);

    @Query("select m.roles from User m where m.id = :id ")
    List<ERole> findRoleUserByid(int id);



}
