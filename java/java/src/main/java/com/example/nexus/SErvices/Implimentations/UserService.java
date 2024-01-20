package com.example.nexus.SErvices.Implimentations;

import com.example.nexus.Repositories.TeamRepo;
import com.example.nexus.Repositories.UserRepo;
import com.example.nexus.entities.Team;
import com.example.nexus.entities.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class UserService {
    @Autowired
    UserRepo userRepo;
    @Autowired
    TeamRepo teamRepo;



    public Integer AjouterUser(User user) {
        userRepo.save(user);
        return user.getId();
    }

    public boolean signup(User u){
        User user1 = userRepo.findByUsername(u.getUsername()).orElse(null);
        User user2 = userRepo.findUserByEmail(u.getUsername()).orElse(null);
        if (user1 != null || user2 != null){
            return false;
        }else{
            userRepo.save(u);
            return true;
        }
    }
    public User assignuserToTeam(int idTeam, int idUser) {
        User user = userRepo.findById(idUser).orElseThrow(() -> new IllegalArgumentException("Invalid user id"));
        Team team = teamRepo.findById(idTeam).orElseThrow(() -> new IllegalArgumentException("Invalid team id"));
        user.setTeam(team);
        return userRepo.save(user);
    }

}
