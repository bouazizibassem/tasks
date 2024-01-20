package com.example.nexus.Repositories;

import com.example.nexus.entities.Sprint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SprintRepo  extends JpaRepository<Sprint, Integer> {
    List<Sprint> findByEtatSprint(boolean etatSprint);
    List<Sprint> findByNomSprint(String nomSprint);
}
