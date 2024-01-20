package com.example.nexus.Aspect;

import com.example.nexus.Repositories.UserRepo;
import com.example.nexus.SErvices.Implimentations.UserService;
import com.example.nexus.SErvices.Implimentations.TeamService;
import com.example.nexus.entities.Team;
import com.example.nexus.entities.User;
import org.aspectj.apache.bcel.classfile.Module;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Aspect
@Component
public class aspectTeam {

    @Autowired
    UserRepo userRepo;
    @Autowired
    UserService userService;

    private Logger logger = LoggerFactory.getLogger(this.getClass());


    @AfterReturning(pointcut="execution (* com.example.nexus.controllers.UserController.assignUserToTeam (..)) " ,returning = "user")
    public void send (JoinPoint jointPoint, User user){

        logger.info("Arg: " + user.getEmail());}


}
