package com.example.nexus.Repositories;

import com.example.nexus.entities.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepo extends JpaRepository<Project, Integer> {
    @Query("SELECT p FROM Project p JOIN FETCH p.sprints s WHERE s.etatSprint = true " +
            "GROUP BY p.idProject " +
            "ORDER BY COUNT(s) DESC")
    Project getProjectWithMostActiveSprints();


}
