package com.example.nexus.SErvices.Implimentations;
import com.example.nexus.Repositories.ProjectRepo;
import com.example.nexus.Repositories.TeamRepo;
import com.example.nexus.entities.Project;
import com.example.nexus.entities.User;
import com.example.nexus.entities.Team;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TeamService {

    @Autowired
    private TeamRepo teamRepo;

    @Autowired
    private ProjectRepo projectRepo;


    public Team AjouterTeam(Team team) {

        return teamRepo.save(team);

    }




}